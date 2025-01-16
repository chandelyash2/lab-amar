/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <img src="/Logo.png" alt="Logo" width={150} height={100} />
      <span className="text-2xl uppercase font-semibold text-center mb-8 mr-6 text-[#5ab334]">
        Amar Diagnostic <br />
        Laboratory
      </span>
      <div className="flex flex-col text-sm ">
        <span>M.C. Shopping Complex </span>
        <span>Shop No.30-31-32</span>
        <span>Near Post Office, Hamirpur (H.P)</span>
        <span>Phone:8278711796</span>
        <span>Email:kumarshubhi906@gmail.com</span>
      </div>
    </div>
  );
};

export default Header;
