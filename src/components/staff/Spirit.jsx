const Spirit = ({ title, members = [] }) => {
  return (
    <li>
      <p>{title}</p>
      <ul>
        {members.map((member, index) => (
          <li key={index} className="member-name">
            {member.url ? (
              <a href={member.url} target="_blank" rel="noopener noreferrer">
                {member.name}
              </a>
            ) : (
              member.name
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Spirit;
