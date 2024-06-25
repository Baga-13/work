import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  option:
    "py-2 px-2 cursor-pointer text-[14px] hover:bg-gray-50 font-bcd font-extralight transition-all",
  list: " w-[18rem] font-ab text-[13px] text-gray-500",
  dropdown:
    "font-ab font-light flex items-center border py-1 px-1 w-[6rem] rounded-md",
  options: "text-sm text-[#2f3061] font-light font-def",
  select: "font-bcd text-gray-500",
  header: "font-bcd",
};

const Input = () => {
  // const [open, setOpen] = useState(false);
  //======== select state =======
  const [date, setDate] = React.useState("");
  const [remote, setRemote] = React.useState("");
  const [schedule, setSchedule] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeDate = (event = Select) => {
    setDate(event.target.value);
  };
  const handleChangeRemote = (event = Select) => {
    setRemote(event.target.value);
  };
  const handleChangeSchedule = (event = Select) => {
    setSchedule(event.target.value);
  };
  const handleChangeLevel = (event = Select) => {
    setLevel(event.target.value);
  };

  function Clear() {
    setDate("");
    setRemote("");
    setSchedule("");
    setLevel("");
    setTitle("");
    setLocation("");
  }

  return (
    <div>
      <div className="mx-[2.6rem] md:mx-[3.3rem] lg:mx-[6.3rem] xl:mx-[9rem]">
        {/* search input */}
        <div>
          <div className="flex mt-12 mb-3 space-x-4">
            <input
              className="bg-gray-50 border py-2 px-6 w-[24rem] text-[15px] text-gray-500 rounded-md hover:border-[#8FD400] focus:outline-blue-400"
              placeholder=" Search for job titles, companies, or keywords"
              type="text"
              value={title}
              onChange={handleTitle}
            />
            <input
              className="bg-gray-50 border py-2 px-6 w-[24rem] text-[15px] text-gray-500 rounded-md hover:border-[#8FD400] focus:outline-blue-400"
              placeholder="Location"
              value={location}
              onChange={handleLocation}
              type="text"
            />
            <button
              className="hidden font-medium lg:block font-bcd text-sm font-regular bg-[#8FD400] text-white hover:bg-slate-100 hover:text-[#2f3061] transition px-4 py-2 rounded-[3px] cursor-pointer hover:shadow-md tracking-wider"
              type="submit"
            >
              Find Job
            </button>
          </div>
        </div>
      </div>

      <div className="mx-[2.6rem] md:mx-[3.3rem] lg:mx-[6.3rem] xl:mx-[7.4rem] w-[30vw]">
        <div className="flex">
          {/* ==================== Date Posted ============= */}
          <div className="scale-75 ">
            <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
              <InputLabel className={style.header}>Date posted</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={date}
                label="Date posted"
                onChange={handleChangeDate}
                className={style.select}
              >
                <MenuItem value="">
                  <p className={style.options}>Date posted</p>
                </MenuItem>
                <MenuItem className={style.options} value={10}>
                  Last 24 hours
                </MenuItem>
                <MenuItem className={style.options} value={20}>
                  Last 7 days
                </MenuItem>
                <MenuItem className={style.options} value={30}>
                  Last month
                </MenuItem>
                <MenuItem className={style.options} value={30}>
                  Last 3 months
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* ==================== remote ============= */}
          <div className="scale-75">
            <FormControl sx={{ m: 1, minWidth: 230 }} size="small">
              <InputLabel className={style.header}>Remote</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={remote}
                label="Remote"
                onChange={handleChangeRemote}
                className={style.select}
              >
                <MenuItem value="">
                  <p className={style.options}>Remote</p>
                </MenuItem>
                <MenuItem className={style.options} value={10}>
                  100% Remote Work
                </MenuItem>
                <MenuItem className={style.options} value={20}>
                  Hybrid Remote Work
                </MenuItem>
                <MenuItem className={style.options} value={30}>
                  Option for Remote Work
                </MenuItem>
                <MenuItem className={style.options} value={40}>
                  No Remote Work
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          {/*  ==================== Schedule ======================== */}
          <div className="scale-75">
            <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
              <InputLabel className={style.header}>Schedule</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={schedule}
                label="Schedule"
                onChange={handleChangeSchedule}
                className={style.select}
              >
                <MenuItem value="">
                  <p className={style.options}>Schedule</p>
                </MenuItem>
                <MenuItem className={style.options} value={10}>
                  Full-Time
                </MenuItem>
                <MenuItem className={style.options} value={20}>
                  Part-Time
                </MenuItem>
                <MenuItem className={style.options} value={30}>
                  Flexible Schedule
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <button
            onClick={() => Clear()}
            className="text-[14px] font-bcd text-[#2f3061] hover:bg-slate-100 hover:shadow-md px-4"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
