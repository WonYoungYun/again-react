import React from 'react';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter', () => {
    let component = null;

    it('renders corrctly', () => {
        //초기 렌더링  확인
        component = renderer.create(<Counter />)
    });

    it('matches snapshot', () => {
        //초기 렌더링 스냅샷 일치 확인
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    //increase가 잘되는지 확인
    it('increases correctly', () => {
        component.getInstance().onIncrease();

        //value가 2인지 확인
        expect(component.getInstance().state.value).toBe(2);
        const tree = component.toJSON();//re-render
        expect(tree).toMatchSnapshot();//스냅샷 비교
    })

    //decrease가 잘되는지 확인
    it('decreases correctly', () => {
        component.getInstance().onDecrease();
        expect(component.getInstance().state.value).toBe(1);//value값 확인
        const tree = component.toJSON();//re-renderer
        expect(tree).toMatchSnapshot();//스냅샷 비교
    });
});