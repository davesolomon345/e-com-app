

const BUTTON_TYPE_CLASSES={
    google:'google-sign-in',
    inverted:'inverted'
}




 const Button = ({Children, butttonTypes, ...otherProps})=> {
return(
    <button className={`button-container ${BUTTON_TYPE_CLASSES[butttonTypes]}`}
    {...otherProps}
    >
   {Children}
    </button>
)

 }
 export default Button;