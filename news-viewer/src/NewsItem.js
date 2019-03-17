import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display:flex;
    .thumbnail{
        margin-right: 1rem;
        img{
            display:block;
            width:160px;
            height: 100px;
            object-fit: cover;
            /* object-fit으로 이미지를 비율에 유치한채 가공 */
        }
    }
    .contents{
        h2{
            margin: 0;
            a{
                color: black;
            }
        }
        p{
            margin: 0;
            line-height: 1.5;
            margin-top: .5rem;
            white-space: normal;
        }
    }
    &+&{
        /* NewsItemBlock옆의 NewsItemBlock에 적용 */
        margin-top: 3rem;
    }
`;

export default ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}