import saleImage from "../assests/images/sales.jpg"

function SalesImage(){
    return (
        <div class="sale-image">
        <img src={saleImage} alt="Sale Image"></img>
        <div class="sale__offer">
            <h2>Udemy Flash Sale 24 hours to save</h2>
            <p>Get the top Courses for just ₹499. Just one day to save <br></br> but a lifetime to learn</p>
        </div>
    </div>
    )
}

export default SalesImage