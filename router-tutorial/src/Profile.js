import React from 'react';

//프로필에서 사용 할 데이터
const profileData = {
    me: {
        name: "미",
        description: "나는 나다"
    },
    you: {
        name: "유",
        description: "너는 너다"
    }
}

export default ({ match }) => {
    //파라미터를 받아올 때 는 match안에 들어있는 params값 참조
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>없는 유저입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <textarea value={JSON.stringify(match)} readOnly />
        </div>
    )
}