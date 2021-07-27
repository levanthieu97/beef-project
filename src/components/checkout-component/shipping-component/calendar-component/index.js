import React, {useReducer} from "react"; 
import {format, addMonths, subMonths, startOfWeek, endOfWeek, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay} from "date-fns";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CalendarComponent = (props) => {
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            currentMonth: new Date(),
            selectedDate: new Date()
        }
    );

    const prevMonth = () => {
        const preMonth = parseInt(format(state.currentMonth, "L"));
        if(preMonth - 1 > new Date().getMonth()){
            setState({
              currentMonth: subMonths(state.currentMonth, 1)
          });
        } 
    }

    const nextMonth = () => {
      const preMonth = parseInt(format(state.currentMonth, "L"));
      if(preMonth < new Date().getMonth() + 3) {
        setState({
            currentMonth: addMonths(state.currentMonth, 1)
        });
      }
    }

    const onDateClick = (day) => {
        setState({
            selectedDate: day
        })
    }

    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";
        return (
            <div className="header row-calendar flex-middle">
                <div className="col-calendar col-start">
                  <div className="icon" onClick={prevMonth}>
                    <FaAngleLeft/>
                  </div>
                </div>
                <div className="col-calendar col-center">
                    <span className="current-month">{format(state.currentMonth, dateFormat)}</span>
                </div>
                <div className="col-calendar col-end" >
                  <div className="icon" onClick={nextMonth}>
                    <FaAngleRight/>
                  </div>
                </div>
            </div>
        )
    }

    const renderDays = ()  =>{
        const dateFormat = "EE";
        const days = [];
        let startDate = startOfWeek(state.currentMonth);
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col-calendar col-center" key={i}>
              {format(addDays(startDate, i), dateFormat)}
            </div>
          );
        }
        return <div className="days row-calendar">{days}</div>;
    }

    const renderCells = () => {
        const { currentMonth, selectedDate } = state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "d";
        const monthFormat = "L";
        const nowDate = new Date();
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
          for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
              <div  className={`col-calendar cell ${
                !isSameMonth(day, monthStart) || ( parseInt(format(day, dateFormat)) < nowDate.getDate() && parseInt(format(day, monthFormat)) === nowDate.getMonth() +1)
                    ? "disabled"
                    : isSameDay(day, selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() => onDateClick(cloneDay)}
              >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
                {isSameDay(day, selectedDate) && (
                  <span className="shipping-cost">$10</span>
                )}
              </div>
            );
            day = addDays(day, 1);
          }
          rows.push(
            <div className="row-calendar" key={day}>
              {days}
            </div>
          );
          days = [];
        }
        return <div className="body">{rows}</div>;
    }

    return (
        <div className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    )
}

export default React.memo(CalendarComponent);