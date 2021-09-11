import React from "react";
import "./Definition.css";
const Definitions = ({ word, category, meanings, LightMode }) => {
    return (
        <div className="meanings" style={{ borderColor: LightMode ? "#343A40" : "#8236cb" }}>
            {meanings[0] && word && category === "en" && (
                <audio
                    style={{ backgroundColor: "#fff", borderRadius: 10, width: "100%" }}
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}
            {word === "" ? (
                <span className="subTile">Start by typing a Word in Search</span>
            ) : (
                meanings.map((mean) =>
                    mean.meanings.map((item) =>
                        item.definitions.map((def) => (
                            <div
                                className="singleMean"
                                style={{ background: LightMode ? "#FEFBF3" : "#AC66CC", color: "#000" }}
                            >
                                <b>{def.definition}</b>
                                <hr style={{ background: "#000", width: "100%" }} />
                                {def.example && (
                                    <span>
                                        <b>Example: </b> {def.example}
                                    </span>
                                )}
                                {def.synonyms && (
                                    <span>
                                        <b>Synonyms: </b> {def.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Definitions;
