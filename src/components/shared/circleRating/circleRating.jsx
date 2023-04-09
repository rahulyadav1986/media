import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from  './style.module.scss';

const CircleRating = ({ rating }) => {
    return (
        <div className={styles.circleRating}>
            <CircularProgressbar
                value={rating}
                maxValue={100}
                text={rating === 0 ? "0" + " " + "%" : rating +  " "  + "%"}
                styles={buildStyles({
                    pathColor:
                        rating < 50 ? "rgb(207,61,54)" : rating < 60 ? "#ddbd0d" : "#38cc10",
                })}
            />
        </div>
    );
};

export default CircleRating;