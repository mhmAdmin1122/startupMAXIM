import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Review1 from "@/public/img/BrianJames-1.jpeg";

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dot: true,
    centerPadding: "25%",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          centerMode: true,
          dot: true,
          centerPadding: "150px",
          slidesToShow: 1,
          speed: 500,
          rows: 1,
          slidesPerRow: 1,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 522,
        settings: {
          centerMode: true,
          dot: true,
          centerPadding: "50px",
          slidesToShow: 1,
          speed: 500,
          rows: 1,
          slidesPerRow: 1,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 355,
        settings: {
          centerMode: true,
          dot: true,
          centerPadding: "30px",
          slidesToShow: 1,
          speed: 500,
          rows: 1,
          slidesPerRow: 1,
          autoplaySpeed: 5000,
        }
      }
    ],
  };
  return (
    <main className="testimonial">
      <section className="heading-section">
        <p className="text-[var(--text-gray)]">Testimonials</p>
        <div className="heading">
          <h1>Love From </h1>
          <h1 className="text-[var(--background-color)]">Clients</h1>
        </div>
      </section>
      <div className="w-full">
        <div>
          <Slider {...settings} className="testimonial-slider">
            <div className="px-[20px] ml-[50%] max-[930px]:m-0">
              <div className="flex justify-center">
                <div className="flex max-[930px]:flex-col max-[930px]:rounded-[10px] justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--background-color)]">
                  <div className="my-[18px] ml-[25px] max-[930px]:m-0 max-[930px]w-fit">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px] min-[1100px]:text-[30px] min-[1700px]:text-[45px]">
                      Tayyab Arshad
                    </h1>
                    <p className="font-semibold text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[20px] max-[930px]:m-0">
              <div className="flex justify-center">
                <div className="flex max-[930px]:flex-col max-[930px]:rounded-[10px] justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--secondary-color)]">
                  <div className="my-[18px] ml-[25px] max-[930px]:m-0 max-[930px]w-fit">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px] min-[1100px]:text-[30px] min-[1700px]:text-[45px]">
                      Tayyab Arshad
                    </h1>
                    <p className="font-semibold text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[20px] ml-[50%] max-[930px]:m-0">
              <div className="flex justify-center">
                <div className="flex max-[930px]:flex-col max-[930px]:rounded-[10px] justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--background-color)]">
                  <div className="my-[18px] ml-[25px] max-[930px]:m-0 max-[930px]w-fit">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px] min-[1100px]:text-[30px] min-[1700px]:text-[45px]">
                      Tayyab Arshad
                    </h1>
                    <p className="font-semibold text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[20px] max-[930px]:m-0">
              <div className="flex justify-center">
                <div className="flex max-[930px]:flex-col max-[930px]:rounded-[10px] justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--secondary-color)]">
                  <div className="my-[18px] ml-[25px] max-[930px]:m-0">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px] min-[1100px]:text-[30px] min-[1700px]:text-[45px]">
                      Tayyab Arshad
                    </h1>
                    <p className="font-semibold text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[20px] ml-[50%] max-[930px]:m-0">
              <div className="flex justify-center">
                <div className="flex max-[930px]:flex-col max-[930px]:rounded-[10px] justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--background-color)]">
                  <div className="my-[18px] ml-[25px] max-[930px]:m-0 max-[930px]w-fit">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px] min-[1100px]:text-[30px] min-[1700px]:text-[45px]">
                      Tayyab Arshad
                    </h1>
                    <p className="font-semibold text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[20px] max-[930px]:m-0">
              <div className="flex justify-center">
                <div className="flex max-[930px]:flex-col max-[930px]:rounded-[10px] justify-center gap-[20px] w-full rounded-full my-[18px] p-[18px] bg-[var(--secondary-color)]">
                  <div className="my-[18px] ml-[25px] max-[930px]:m-0 max-[930px]w-fit">
                    <Image
                      src={Review1}
                      alt="Review"
                      className="rounded-full "
                      height={700}
                      width={700}
                    />
                  </div>
                  <div className="grid align-middle">
                    <h1 className="font-black text-[18px] min-[1100px]:text-[30px] min-[1700px]:text-[45px]">
                      Tayyab Arshad
                    </h1>
                    <p className="font-semibold text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      Project Manager, The Heritage Company
                    </p>
                    <p className="mt-[10px] text-[14px] min-[1100px]:text-[25px] min-[1700px]:text-[30px]">
                      "I can't even begin to express how happy I am with these
                      services. I have gotten at least 50 times the value from
                      your company. Thanks guys, keep up the good work"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
