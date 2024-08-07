import React, { useEffect, useState } from 'react';

export function Ak_Alert({ title, time }) {
    const [display, setDisplay] = useState("flex");

    useEffect(() => {
        if (time === Infinity) {
            setDisplay("flex");
            return;
        }

        const timer = setTimeout(() => {
            setDisplay("none");
        }, time);
        return () => clearTimeout(timer);
    }, [time]);
    const styles = {
        info: {
            fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            width: "20rem",
            padding: "0.75rem",
            display: display,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            background: "#509AF8",
            borderRadius: "8px",
            boxShadow: "0px 0px 5px -3px #111",
            position: "relative" // Add position relative to properly position the close button
        },
        infoIcon: {
            width: "20px",
            height: "20px",
            transform: "translateY(-2px)",
            marginRight: "8px"
        },
        infoTitle: {
            fontWeight: 500,
            fontSize: "1rem",
            color: "#fff",

        },
        infoClose: {
            width: "1.1rem",
            height: "1.1rem",
            cursor: "pointer",
            marginLeft: "auto",
            position: "absolute", // Position close button to the right of the alert
            right: "0.9rem",
            top: "50%",
            transform: "translateY(-50%)"
        }
    };

    const handleClose = () => {
        setDisplay("none");
    };

    return (
        <div style={styles.info}>
            <div style={styles.infoIcon}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    viewBox="0 0 24 24"
                    height={24}
                    fill="none"
                >
                    <path
                        fill="#fff"
                        d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
                    />
                </svg>
            </div>
            <div style={styles.infoTitle}>{title}</div>
            <div onClick={handleClose} style={styles.infoClose}>
                <svg
                    height={20}
                    viewBox="0 0 20 20"
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                        fill="#fff"
                    />
                </svg>
            </div>
        </div>
    );
}

export function Button({ h, w, event }) {
    const [hover, setHover] = useState(false);

    const baseStyle = {
        height: `${h}rem`,
        width: `${w}rem`,
        backgroundImage:
            "linear-gradient(to right, #e52d27 0%, #b31217 51%, #e52d27 100%)",
        margin: "0.9rem",
        padding: "1rem 2.2rem",
        textAlign: "center",
        textTransform: "uppercase",
        transition: "0.5s",
        backgroundSize: "200% auto",
        color: "white",
        boxShadow: "0 0 20px #eee",
        borderRadius: "10px",
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
    };

    const hoverStyle = {
        backgroundPosition: "right center",
        color: "#fff",
        textDecoration: "none",
    };

    const combinedStyle = hover ? { ...baseStyle, ...hoverStyle } : baseStyle;

    let handleEvent = () => {
        if (typeof event === "function") {
            event();
        }
    };

    return (
        <button
            style={combinedStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleEvent}
        >
            button
        </button>
    );
}




export function CounterUp({ start, end, time, size, weight }) {
    const [number, setNumber] = useState(start);

    useEffect(() => {
        if (number < end) {
            const timer = setTimeout(() => {
                setNumber(prevNumber => prevNumber + 1);
            }, time);

            return () => clearTimeout(timer);
        }
    }, [number, end, time]);

    useEffect(() => {
        setNumber(start);
    }, [start]);

    return (
        <div style={{
            fontSize: `${size}rem`, fontWeight: `${weight}`, color: "white",
            background: "-webkit-linear-gradient(#f12d03, #333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }}>{number}%</div>
    );
}

export function CounterDown({ start, end, time, size }) {
    const [number, setNumber] = useState(start);

    useEffect(() => {
        if (number > end) {
            const timer = setTimeout(() => {
                setNumber(prevNumber => prevNumber - 1);
            }, time);

            return () => clearTimeout(timer);
        }
    }, [number, end, time]);

    useEffect(() => {
        setNumber(start);
    }, [start]);

    return (
        <div style={{ fontSize: `${size}rem` }}>{number}</div>
    );
}