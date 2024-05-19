const Positions = (props) => {
  const detailsClass = props.showDetails ? "role-desc show-text" : "role-desc";
  const moreButtonClass = props.showDetails
    ? "desc-link show-text"
    : "desc-link has-before";
  return (
    <li className="team-role" data-aos="fade-right">
      <div className="title-section">
        <p className="role-title">{props.title + ":"}</p>

        {!props.showDetails && (
          <button className={moreButtonClass} onClick={props.onMoreClick}>
            <span className="read-more">{props.showDetails ? "" : "More"}</span>
          </button>
        )}
      </div>

      {props.showDetails && (
        <ul>
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
        </ul>
      )}
    </li>
  );
};

export default Positions;
