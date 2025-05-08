import React, { useState } from "react";


export const Team = (props) => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Conheça Nossa Equipe</h2>
          <p>Uma equipe apaixonada por ciência, história e paleontologia.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="team-card" onClick={() => handleClick(d)}>
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="team-info">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Carregando..."}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedMember.img} alt={selectedMember.name} className="modal-img" />
            <h2>{selectedMember.name}</h2>
            <h4>{selectedMember.job}</h4>
            <p>{selectedMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
