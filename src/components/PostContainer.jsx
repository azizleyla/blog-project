import React from "react";
import styled from "styled-components";
import { posts } from "../utils/contants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { ReadMoreBtn } from "./Button";
import RecentPost from "./RecentPost";
import HearFromUs from "./HearFromUs";
SwiperCore.use([Navigation, Pagination]);

const PostContainer = () => {
  return (
    <Wrapper className="container">
      <div className="post-container">
        <Swiper
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          navigation
          spaceBetween={0}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={`post-${index}`}>
              <div className="single-post">
                <div className="img-box">
                  <img src={post.img} alt="" />
                </div>

                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <ReadMoreBtn>Read More</ReadMoreBtn>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="post-right">
        <RecentPost />
        <HearFromUs />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5rem;
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0 1.5rem;
    align-items: center;
  }
  .post-right {
    margin-left: 5rem;
    @media (max-width: 992px) {
      margin-left: 0;
      margin-top: 2rem;
    }
  }
  .post-container {
    width: 60%;

    @media (max-width: 1200px) {
      padding: 0 1.5rem;
    }

    @media (max-width: 992px) {
      width: 100%;
    }

    .single-post {
      .img-box {
        overflow: hidden;
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h1 {
        font-weight: bold;
        font-size: 28px;
        line-height: 150%;
        margin: 1rem 0;
        color: #4a4a4a;
      }
      p {
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        color: #4a4a4a;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default PostContainer;
