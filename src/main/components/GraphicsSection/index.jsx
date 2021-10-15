import React from 'react';
import ChangeDate from '../ChangeDate';
import { Stage, Layer, Line } from 'react-konva';


const GraphicsSection = () => {
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
                        <div className="main-panel__graphics-box__wrapper__graphic__canvas">
                            <Stage width={1000} height={500}>
                                <Layer>
                                    <Line
                                        points={[0, 500, 50, 400, 100, 420, 150, 100, 200, 390, 250, 400, 300, 200, 350, 250, 400, 190, 450, 300, 500, 400, 550, 400, 600, 420, 650, 100, 700, 390, 750, 400, 800, 200, 850, 250, 900, 190, 950, 300, 1000, 350]}
                                        x={0}
                                        y={0}
                                        strokeWidth={4}
                                        lineJoin={"round"}
                                        tension={0.4}
                                        // bezier={true}
                                        stroke={"#fafafa"}
                                        lineCap={"round"}
                                        shadowColor={"#fafafa"}
                                        shadowBlur={20}
                                        shadowOpacity={0.6}
                                        shadowOffsetY={20}
                                        fill={"#FE6D58"}
                                    />
                                </Layer>
                            </Stage>
                        </div>
                        <div className="main-panel__graphics-box__wrapper__graphic__canvas">
                            <Stage width={1000} height={500}>
                                <Layer>
                                    <Line
                                        points={[0, 300, 50, 200, 100, 220, 150, 300, 200, 290, 250, 200, 300, 100, 350, 450, 400, 190, 450, 100, 500, 400, 550, 300, 600, 200, 650, 220, 700, 300, 750, 290, 800, 200, 850, 100, 900, 450, 950, 190, 1000, 100]}
                                        x={0}
                                        y={0}
                                        strokeWidth={4}
                                        lineJoin={"round"}
                                        tension={0.4}
                                        // bezier={true}
                                        stroke={"#fafafa"}
                                        lineCap={"round"}
                                        shadowColor={"#fafafa"}
                                        shadowBlur={20}
                                        shadowOpacity={0.6}
                                        shadowOffsetY={20}
                                        fill={"#FE6D58"}
                                    />
                                </Layer>
                            </Stage>
                        </div>
                        <div className="main-panel__graphics-box__wrapper__graphic__canvas">
                            <Stage width={1000} height={500}>
                                <Layer>
                                    <Line
                                        points={[0, 200, 50, 300, 100, 320, 150, 400, 200, 490, 250, 200, 300, 400, 350, 450, 400, 290, 450, 100, 500, 300, 550, 350, 600, 250, 650, 190, 700, 390, 750, 190, 800, 230, 850, 180, 900, 310, 950, 360, 1000, 100]}
                                        x={0}
                                        y={0}
                                        strokeWidth={4}
                                        lineJoin={"round"}
                                        tension={0.4}
                                        // bezier={true}
                                        stroke={"#05D376"}
                                        lineCap={"round"}
                                        shadowColor={"#05D376"}
                                        shadowBlur={20}
                                        shadowOpacity={0.6}
                                        shadowOffsetY={20}
                                        fill={"#FE6D58"}
                                    />
                                </Layer>
                            </Stage>
                        </div>
                        <div className="main-panel__graphics-box__wrapper__graphic__sections-horizontal">
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">01 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 200}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">02 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 100}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">03 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 300}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">04 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 50}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">05 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 400}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">06 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 200}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">07 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 200}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">08 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 200}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">09 Jun</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 200}}></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="section__vertical-line"></div>
                                <div className="section__horizontal-line"></div>
                                <div className="section__date">10 June</div>
                                <div className="section__hover">
                                    <div className="section__hover__box">
                                        <div className="section__hover__box__blur"></div>
                                        <div className="section__hover__box__content">
                                            <h4>Total income</h4>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}><h3>$2.600</h3><p>-12%</p></div>
                                        </div>
                                    </div>
                                    <div className="section__hover__vertical-line" style={{height: 200}}></div>
                                </div>
                            </div>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraphicsSection;