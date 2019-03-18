import React from 'react';

const BlogPostForm = ({ form, onChange, onSubmit }) => {
    const { title, content, tags } = form;
    return (
        <form className="BlogPostForm" onSubmit={onSubmit}>
            <input
                value={title}
                onChange={onChange}
                name="title"
                placeholder="제목"
            />
            <textarea
                value={content}
                onChange={onChange}
                name="content"
                placeholder="내용"
            />
            <input value={tags} onChange={onChange} name="tags" placeholder="태그" />
            <button>작성</button>
        </form>
    );
};

export default BlogPostForm