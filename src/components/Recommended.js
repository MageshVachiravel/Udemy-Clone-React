import c1 from "../assests/images/c1.jpg"
import c2 from "../assests/images/c2.jpg"
import c3 from "../assests/images/c3.jpg"
import c4 from "../assests/images/c4.jpg"



function Recommended(){
    return (
        <div class="recommended">
        <h1 class="recommended__title">Recommeneded for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={c1} alt="Course Image"></img>
                <h3>2023 python Data Visaulation MasterClass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c2} alt="Course Image"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>John Son</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c3} alt="Course Image"></img>
                <h3>100 days of code:The complete Python Programming</h3>
                <p>Dr. Angela Yu</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>₹499 <del>3199</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c4} alt="Course Image"></img>
                <h3>Machine Learning A-Z:AI,Python & R + ChatGPT..</h3>
                <p>Krill Eremenko</p>
                <p>3.7 ⭐⭐⭐</p>
                <p>₹499<del>3999</del>
                </p>
            </div>

        </div>
    </div>
    )
}

export default Recommended