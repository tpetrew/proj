import React, { useState } from 'react';
import ChangeDate from '../ChangeDate';
import { Stage, Layer, Line } from 'react-konva';
import { useSelector } from 'react-redux';

const GraphicsSection = () => {

    const ORANGE_COLOR = '#FE6D58';
    const GREEN_COLOR = '#05D376';
    const BLUE_COLOR = '#346AEC';
    const SECONDARY_COLOR = '#FAFAFA';

    const graphicType = useSelector(state => state.graphic.type)
    const graphicPoints = useSelector(state => state.graphic.data[graphicType].points)
    const graphicName = useSelector(state => state.graphic.data[graphicType].name)

    return (
        <div className="main-panel__graphics-box">
            <div className="main-panel__graphics-box__wrapper">
                <div className="main-panel__invoices-wrapper__header">
                    <h4>Analytic Reports</h4>
                    <ChangeDate />
                </div>
                <div className="graphic-wrapper">
                    <div className="main-panel__graphics-box__wrapper__amount-values">
                        <div className="value">$5k</div>
                        <div className="value">$4k</div>
                        <div className="value">$3k</div>
                        <div className="value">$2k</div>
                        <div className="value">$1k</div>
                        <div className="value">$0k</div>
                    </div>
                    <div className="main-panel__graphics-box__wrapper__graphic">
                        {/* 1 */}
                        <div className="main-panel__graphics-box__wrapper__graphic__canvas">
                            <Stage width={1000} height={500}>
                                <Layer>
                                    <Line
                                        points={graphicPoints}
                                        x={0}
                                        y={0}
                                        strokeWidth={4}
                                        lineJoin={"round"}
                                        tension={0.4}
                                        stroke={graphicType === 2 ? BLUE_COLOR : graphicType === 1 ? ORANGE_COLOR : GREEN_COLOR}
                                        lineCap={"round"}
                                        shadowColor={graphicType === 2 ? BLUE_COLOR : graphicType === 1 ? ORANGE_COLOR : GREEN_COLOR}
                                        shadowBlur={20}
                                        shadowOpacity={0.6}
                                        shadowOffsetY={20}
                                    />
                                </Layer>
                            </Stage>
                        </div>

                        {/* sections mini */}
                        <div className="main-panel__graphics-box__wrapper__graphic__sections-horizontal">
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">1 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>{graphicName}</h4>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}><h3>${(500 - graphicPoints[3]) * 10}</h3><p> </p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{ height: 500 - graphicPoints[3] }}></div>
                                </div>
                            </div>
                            {
                                graphicPoints.map((point, key) => {
                                    if (key > 2 && key % 4 === 3 && key < 38) {
                                        return (
                                            <div className="section">
                                                <div className="section__vertical-line"></div>
                                                <div className="section__horizontal-line"></div>
                                                <div className="section__date">June</div>
                                                <div className="section__hover">
                                                    <div className="section__hover__box">
                                                        <div className="section__hover__box__blur"></div>
                                                        <div className="section__hover__box__content">
                                                            <h4>{graphicName}</h4>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}><h3>${(500 - graphicPoints[key + 4]) * 10}</h3><p>-12%</p></div>
                                                        </div>
                                                    </div>
                                                    <div className="section__hover__vertical-line" style={{ height: 500 - graphicPoints[key + 4] }}></div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphicsSection;