export default function Elem(props) {
    function szinvaltas() {
        props.szinvaltas(props.index);
    }

    const bgColor = props.ertek === "white" ? "white" : "yellow";

    return (
        <div className="kor" onClick={szinvaltas}  style={{ backgroundColor: bgColor }}></div>
    );
}