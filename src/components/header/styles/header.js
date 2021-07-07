import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${({ src }) => (src ? `../images/${src}.jpg` : '../images/bg.jpeg')}) top right / cover no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 7px 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #f40612;
    }
`;

export const Logo = styled.img`
    width: auto;
    height: 1.5rem;
    margin-right: 40px;

    @media (min-width: 1449px) {
      width: 6.75rem;
      height: 2rem;
    }
`;