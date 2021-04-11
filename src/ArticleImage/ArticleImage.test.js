import { iteratee } from 'lodash';
import React from 'react';
import ArticleImage from './ArticleImage';

describe("articleImage test",()=>{
    it("renders correctly",()=>{
        const{container}=render(
            <ArticleImage
                title="The Statue of Liberty's torch heads to new museum"
                url="https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg"
            />
        );
        expect(container).toMatchSnapshot();
    })
})