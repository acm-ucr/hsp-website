import React from "react";
import Mission from "@/components/about/Mission";
import mission1 from "@/public/assets/about/mission1.svg";
import mission2 from "@/public/assets/about/mission2.svg";
import mission3 from "@/public/assets/about/mission3.svg";

const page = () => {
  const text1 =
    "HSP seeks to promote public awareness and interest in the field through various outreach activities, such as recorded demonstrations, tabling, and educational events.";
  const text2 =
    "Provide members with valuable learning experiences and enhance their understanding of the practical applications of the theories and principles of aerospace engineering.";
  const text3 =
    "HSP is committed to maintaining an inclusive and welcoming environment that values diversity of thought and respects the rights and dignity of all its members. HSP shall operate in accordance with the relevant laws and regulations and shall be guided by its Constitution and Bylaws.";

  const para1 =
    "Lorem ipsum dolor sit amet. Cum aspernatur illo a cupiditate dolorem quo illum maiores et corporis quae in molestias laborum nam corporis sunt. Non beatae ducimus qui animi quaerat ut placeat recusandae in perspiciatis";
  const para2 =
    "We aim to inspire and encourage the next generation of scientists and engineers by actively engaging with the wider community, particularly in the area of STEM education.";
  const para3 =
    "Lorem ipsum dolor sit amet. Cum aspernatur illo a cupiditate dolorem quo illum maiores";

  return (
    <div className="grid grid-cols-3 gap-3 bg-black">
      <Mission title="space program" img={mission1} text={text1} para={para1} />
      <Mission title="our mission" img={mission2} text={text2} para={para2} />
      <Mission title="our vision" img={mission3} text={text3} para={para3} />
    </div>
  );
};

export default page;
