"use client";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const style = {
  label: "font-bcd text-[15px] text-[#2f3061]",
  header: "font-bcd text-[22px] text-[#2f3061]",
  block: "space-y-1",
  select: "font-bcd text-gray-500",
  options: "text-[12px] text-[#2f3061] font-ab",
};

export const JobForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [requirements, setRequirements] = useState("");
  const [type, setType] = useState("");
  const [hours, setHours] = useState("");
  const [number, setNumber] = useState("");
  const [payment, setPayment] = useState("");
  const [duration, setDuration] = useState("");
  const [info, setInfo] = useState("");
  const [deadline, setDeadline] = useState("");

  function clear() {
    setTitle("");
    setDescription("");
    setResponsibility("");
    setRequirements("");
    setType("");
    setHours("");
    setPayment("");
    setNumber("");
    setDeadline("");
    setCompanyName("");
  }

  const handleSubmit = () => {
    e.prevent.default();

    clear();
  };

  return (
    <div className="mx-auto w-[80%]">
      <h1 className={style.header}>Job Details</h1>
      <form action="" className="space-y-5" onSubmit={handleSubmit}>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Title
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="job title"
            id=""
            value={title}
            onChange={() => setTitle(e.target.value)}
            placeholder="e.g Web Designer"
            required
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Description
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="job description"
            id=""
            value={description}
            onChange={() => setDescription(e.target.value)}
            placeholder=""
            required
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Responsibility
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="responsibility"
            id=""
            value={responsibility}
            onChange={() => setResponsibility(e.target.value)}
            placeholder=""
            required
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Requirements
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="requirements"
            id=""
            value={requirements}
            onChange={() => setRequirements(e.target.value)}
            placeholder=""
            required
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Employment type
          </label>
          <br />
          <div className="scale-75 relative right-[8.9rem]">
            <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
              <InputLabel id="demo-select-small"></InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label=""
                value={type}
                onChange={() => setType(e.target.value)}
                className={style.select}
              >
                <MenuItem value="">
                  <em className={style.options}></em>
                </MenuItem>
                <MenuItem className={style.options} value={10}>
                  Full-time
                </MenuItem>
                <MenuItem className={style.options} value={20}>
                  Part-time
                </MenuItem>
                <MenuItem className={style.options} value={30}>
                  Permanent
                </MenuItem>
                <MenuItem className={style.options} value={30}>
                  Temporary
                </MenuItem>
                <MenuItem className={style.options} value={30}>
                  Contract
                </MenuItem>
                <MenuItem className={style.options} value={30}>
                  Internship
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Work hours
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="duration"
            id=""
            value={hours}
            onChange={() => setHours(e.target.value)}
            placeholder="e.g 3 months"
            required
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Payment
          </label>
          <br />
          <div>
            {" "}
            <input
              className="input"
              type="text"
              name="payment"
              id=""
              value={payment}
              onChange={() => setPayment(e.target.value)}
              placeholder="e.g 3 months"
              required
            />
          </div>
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Employable number
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="duration"
            id=""
            value={number}
            onChange={() => setNumber(e.target.value)}
            placeholder="e.g 3 months"
            required
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Application deadline
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="duration"
            id=""
            value={deadline}
            onChange={() => setDeadline(e.target.value)}
            placeholder="e.g 3 months"
            required
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Job post duration
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="duration"
            id=""
            value={duration}
            onChange={() => setDuration(e.target.value)}
            placeholder="e.g 3 months"
            required
          />
        </div>
        <div className={style.block}>
          <label className={style.label} htmlFor="">
            Additional information
          </label>
          <br />
          <input
            className="input"
            type="text"
            name="info"
            id=""
            value={info}
            onChange={() => setInfo(e.target.value)}
            placeholder=""
            required
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
