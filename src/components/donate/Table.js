import React from "react";

const Table = () => {
  return (
    <div className="text-center w-full flex flex-col justify-center items-center font-sans">
      <div className="text-3xl w-full mt-10 mb-6">BENEFITS TIER TABLE</div>

      <table className="table-auto border border-black mb-4 lg:text-xl w-7/12 ">
        <thead>
          <tr>
            <th className="border-3 border-black w-56">BENEFITS</th>
            <th className="border-3 border-black w-28">Tier 4 $3000</th>
            <th className="border-3 border-black w-28">Tier 3 $1500</th>
            <th className="border-3 border-black w-28">Tier 2 $1000</th>
            <th className="border-3 border-black w-28">Tier 1 $500</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border border-black">
              Advertised During Recruitment/General Meeting
            </td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
          </tr>
          <tr>
            <td className="border border-black">Logo on Website</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
          </tr>
          <tr>
            <td className="border border-black">Social Media Posts</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
          </tr>
          <tr>
            <td className="border border-black">
              Logo on Launch Vehicle/Test Stand
            </td>
            <td className="border border-black">Large</td>
            <td className="border border-black">Medium</td>
            <td className="border border-black">Small</td>
            <td className="border border-black"></td>
          </tr>
          <tr>
            <td className="border border-black">Logo on Team Apparel</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black"></td>
          </tr>
          <tr>
            <td className="border border-black">
              Advertised on Technical Presentation Slides
            </td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
          </tr>
          <tr>
            <td className="border border-black">Complimentary Merch</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
          </tr>
          <tr>
            <td className="border border-black">Shop Tour</td>
            <td className="border border-black">X</td>
            <td className="border border-black">X</td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
          </tr>
          <tr>
            <td className="border border-black">
              Resume Packet of HSP Students
            </td>
            <td className="border border-black">X</td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
          </tr>
          <tr>
            <td className="border border-black">
              Speaking and Tabling Opportunities
            </td>
            <td className="border border-black">X</td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
          </tr>
          <tr>
            <td className="border border-black">
              Promote Internships/Job Opportunities to Members
            </td>
            <td className="border border-black">X</td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
