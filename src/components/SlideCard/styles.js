import styled  from 'styled-components/native';

export const Container = styled.View `
    background-color: red;
`;

export const Title = styled.Text`
color: #fff;
font-size: 22px;
font-weight: bold;

`;

export const SlideScroll = styled.ScrollView.attrs({
    showsHorizontalIndicator: false
})``;