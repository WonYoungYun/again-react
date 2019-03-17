import React, { Component } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import { newsApi } from './api'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and(max-width: 768px){
        width: 100%;
        padding-left:1rem;
        padding-right:1rem;
    }
`;


class NewsList extends Component {
    state = {
        loading: false,
        articles: null,
    };

    loadData = async () => {

        try {
            this.setState({
                loading: true,
            });
            const { category } = this.props;
            const { data: { articles } } = category !== 'all' ?
                await newsApi.getNews(category) :
                await newsApi.getAllNews();
            this.setState({
                articles,
            });
        } catch (err) {
            console.error(err);
        } finally {
            this.setState({
                loading: false,
            });
        }
    };
    componentDidMount() {
        this.loadData();
    };
    componentDidUpdate(prevProps, prevState) {
        //category값이 바뀔 떄 함수 재호출
        if (prevProps.category !== this.props.category) {
            this.loadData();
        }
    }
    render() {
        const { articles } = this.state;
        return (
            <NewsListBlock>
                {articles && articles.map(article =>
                    <NewsItem key={article.url} article={article} />
                )}
            </NewsListBlock>
        )
    }
}
export default NewsList;