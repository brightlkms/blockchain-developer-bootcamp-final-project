import React from 'react';
function Team_Person({ title, text, image }) {
  return (
    <div
      style={{
        paddingBottom: '5em',
        paddingLeft: '5em',
        paddingTop: '5em',
        textAlign: 'left',
      }}
    >
      <img className="team_person_image" src={image} />
      <h2 as="h3" style={{ width: '80%', fontSize: '2em', color: 'red' }}>
        {title}
      </h2>
      <p style={{ width: '80%', fontSize: '1.33em' }}>{text}</p>
    </div>
  );
}

export default Team_Person;
