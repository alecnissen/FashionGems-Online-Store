import react from "react" 
import Header from "./Header"
import Footer from "./Footer"
import aboutPhoto1 from "../Images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg"
import aboutPhoto2 from "../Images/pexels-mart-production-7679453.jpg"

export default function About( { newCartItems }) { 
    return ( 
        <> 
        <Header newCartItems={newCartItems}></Header>
        <div className="about-component-content-container">
        <h1>Our Story</h1>
        <h4>We Are Committed to Excellence!</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum fugit modi mollitia dignissimos enim temporibus vel quidem, quasi neque nihil voluptatum id cumque necessitatibus iste quisquam iusto accusamus! Non.
        Minima tempore unde cum nostrum in placeat a nesciunt vel quod aliquid amet excepturi eos necessitatibus, illo soluta accusamus voluptatibus ducimus omnis facere velit esse! Incidunt assumenda corporis laboriosam sint.
        Magni assumenda fugit autem velit. Illum ad accusamus vel beatae qui sequi eius aperiam nemo aut alias molestias consequatur sint dignissimos omnis, vero repellendus delectus consectetur molestiae esse magni id.
        A, voluptatum nesciunt. Nostrum natus totam ab assumenda, at labore fugiat saepe accusantium necessitatibus veniam excepturi modi, consequuntur debitis asperiores iure laboriosam deserunt exercitationem pariatur. Iusto quae quas obcaecati amet.
        Molestias inventore voluptate culpa doloribus ut veritatis voluptatem at consectetur illo minima maiores, nesciunt odio natus itaque quia, nihil asperiores. Soluta voluptate in itaque atque facere, aut dignissimos enim cumque.
        Expedita deserunt cumque repellendus enim obcaecati dolores dolorem accusamus consequatur iusto, ab autem incidunt ex distinctio odio! Molestias earum aperiam eveniet eligendi, reiciendis, consectetur aspernatur assumenda, quod sed quisquam minus.
        </p>
        <div className="about-photo-container">
        <img src={aboutPhoto1} alt="inside of a clothing store" />
        <img src={aboutPhoto2} alt="women looking through clothes" />
        </div>


        </div>
        <Footer></Footer>
        </>
    )
}