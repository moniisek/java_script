import React, {useState} from 'react';


const Name = React.memo(() => {
  const [name, setName] = useState('');
  console.log("name rendered");
  return (
    <label className="project-name">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="Untitled"
      />
      {/*onClick, the text will be selected */}
    </label>
  )
})

export default Name;
