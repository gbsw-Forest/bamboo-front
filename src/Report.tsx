import React from "react";

interface ReportProps {
  id: number;
  date: string;
  title: string;
  text: string;
  tag: string;
  isDarkTheme: boolean; // 추가
}

const Report: React.FC<ReportProps> = ({
  id,
  date,
  title,
  text,
  tag,
  isDarkTheme,
}) => {
  return (
    <div className={`report-container ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="report-id">#{id}번째 코드</div>
      <div className="report-date">{date}</div>
      <div className="report-title">{title}</div>
      <div className="report-text">{text}</div>
      <div className={`report-tag ${isDarkTheme ? "dark-theme" : ""}`}>
        {tag}
      </div>
    </div>
  );
};

export default Report;
