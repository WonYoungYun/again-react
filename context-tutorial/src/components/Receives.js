import React from 'react';
import { SampleConsumer, useSample } from '../contexts/sample';

const Receives = ({ value }) => (
    // <SampleConsumer>
    //     {
    //         (sample) => (
    //             <div>
    //                 현재 설정된 값 : {sample.state.value}
    //             </div>
    //         )
    //     }
    // </SampleConsumer>
    <div>
        현재 설정된 값 : {value}
    </div>
);

// export default Receives;
export default useSample(Receives);