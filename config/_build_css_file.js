let _beef_scss_path = './src/styles/scss/styles.scss';

const paths = {
    sass: ['./src/styles/**/*.scss', './src/styles/**/**/*.scss'],
    src_Beef_CSS_Dir: './src/styles/css/beef',
    dest_Beef_CSS_Dir: './public/css/beef',
    extName: {
        extname: '.min.css'
    }
}

module.exports = {
    _beef_scss_path,
    paths
}