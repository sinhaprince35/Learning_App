import React from "react";
import "./perks.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddchartIcon from "@mui/icons-material/Addchart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import StorageIcon from "@mui/icons-material/Storage";
import GradientOutlinedIcon from "@mui/icons-material/GradientOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AnchorOutlinedIcon from "@mui/icons-material/AnchorOutlined";
import DiscFullOutlinedIcon from "@mui/icons-material/DiscFullOutlined";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";

const Perks = () => {
  return (
    <div id="perks" className="perks-container">
      <div className="perksTitle">
        <h2>
          <span className="line">___</span>PERKS & BENEFITS
          <span className="line">___</span>
        </h2>
        <h6 className="subTitle">
          And in that moment, I swear we were infinite
        </h6>
      </div>
      <div className="perksContents">
        <div className="perks-contents">
          <div className="icon">
            <StorefrontIcon />
          </div>
          <h3>In depth high quality Videos</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <AddchartIcon />
          </div>
          <h3>Project Based Learning</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <ListAltIcon />
          </div>
          <h3>Assignments after each sections</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <FormatPaintIcon />
          </div>
          <h3>Attend from anywhere</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <StorageIcon />
          </div>
          <h3>We will start learning from Episode 1</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <GradientOutlinedIcon />
          </div>
          <h3>Access to Premium community</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <CloudDoneOutlinedIcon />
          </div>
          <h3>Three Year Access to all course content</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <LocalOfferOutlinedIcon />
          </div>
          <h3>Everything thought by Lorem Ipsum</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <AnchorOutlinedIcon />
          </div>
          <h3>Frontend Developer Course Certificte</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <DiscFullOutlinedIcon />
          </div>
          <h3>Bonus Session on Personal Branding</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <SettingsInputAntennaOutlinedIcon />
          </div>
          <h3>Bonus Session on LinkedIn Tips and Tricks</h3>
        </div>
        <div className="perks-contents">
          <div className="icon">
            <FingerprintOutlinedIcon />
          </div>
          <h3>Bonus session on Resume Building</h3>
        </div>
      </div>
    </div>
  );
};

export default Perks;
