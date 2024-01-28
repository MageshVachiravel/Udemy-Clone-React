import c5 from "../assests/images/c5.jpg"
import c6 from "../assests/images/c6.jpg"
import c7 from "../assests/images/c7.jpg"
import c8 from "../assests/images/c8.jpg"
import c9 from "../assests/images/c9.jpg"
import c10 from "../assests/images/c10.jpg"
import c11 from "../assests/images/c11.jpg"
import c12 from "../assests/images/c12.jpg"


function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={c5} alt="Course"></img>
                <h3>Java 17 Masterclass: Start Coding in 203</h3>
                <p>Sweigart</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c6} alt="Course"></img>
                <h3>The DataScience Course: Complete Data Science..</h3>
                <p>Ardit Suice</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c7} alt="Course"></img>
                <h3>The complete SQL Bootcamp Go from Zero to Hero </h3>
                <p>Dacvid Bomal</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c8} alt="Course"></img>
                <h3>DevOps Beginners to Advanced With Projects</h3>
                <p>Ivan Lourenco Gomes</p>
                <p>3.7 ⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
            <img src={c9} alt="Course"></img>
                <h3>Python Mega Course : Learn Python in 60days, Build..</h3>
                <p>SDE Arts | Octave</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c10} alt="Course"></img>
                <h3>Learn to code in python 3:programming beginners to..</h3>
                <p>Horizon Tech</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c11} alt="Course Image"></img>
                <h3>The Complete Digital Marketing Guide- 24 course..</h3>
                <p>Dev Nirwal</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>

            <div class="course-card">
                <img src={c12} alt="Course Image"></img>
                <h3>Python Network Programming for Network..</h3>
                <p>Hadilen</p>
                <p>3.7 ⭐⭐⭐</p>
                <p>₹499 <del>1999</del>
                </p>
            </div>
        </div>
    </div>
    )
}

export default Popular