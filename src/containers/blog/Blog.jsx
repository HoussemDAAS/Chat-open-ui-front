import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import { Article } from "../../components";
const Blog = () => {
  return (
    <div className="wedding__blog section__padding" id="blog">
    <div className="wedding__blog-heading">
      <h1 className="gradient__text">Perfect Vows:<br />Bespoke Elegance & Seamless Wedding Planning</h1>
    </div>
    <div className="wedding__blog-container">
      <div className="wedding__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Our dedicated team specializes in crafting bespoke wedding experiences, ensuring every detail reflects your unique love story." />
      </div>
      <div className="wedding__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2023" text="We provide a seamless blend of classic sophistication and modern luxury, turning your special day into a timeless memory." />
        <Article imgUrl={blog03} date="oct 20, 2022" text="Our expert planners take the reins, transforming wedding stress into excitement with meticulous planning and organization, for a joyous journey to the altar." />
        <Article imgUrl={blog04} date="jan 10, 2021" text="We handpick exquisite venues and curate magical atmospheres, setting the stage for your enchanting celebration." />
        <Article imgUrl={blog05} date="apr 8, 2021" text="With a keen eye for detail and a personal touch, we ensure every aspect of your wedding is executed to perfection, reflecting your individual style and preferences." />
      </div>
    </div>
  </div>
  )
}

export default Blog
