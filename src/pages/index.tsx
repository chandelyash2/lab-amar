import PrintedLayout from "@/components/Layout/PrintedLayout";
import Select from "@/components/common/Select";
import { reportType } from "@/constants/reportJson";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("");
  return (
    <div className="m-4">
      <div className="flex justify-center">
        <Select
          options={reportType}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      {selected && <PrintedLayout selected={selected} />}
    </div>
  );
}
