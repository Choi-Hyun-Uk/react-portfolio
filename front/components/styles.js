import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 6rem;
    z-index: 99999;
    transition-duration: 0.3s;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0.8;
    }

    &.hide {
        top: -100%;
    }

    & .inner {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 1000px;
        height: 100%;
        margin: 0 auto;
        padding: 0 1rem;

        & div {
            font-size: 1.25rem;
        }

        & .name-logo {
            position: relative;
            display: flex;
            flex-direction: row;
            & div {
                width: 2rem;
                height: 2rem;
                text-align: center;
                line-height: 2.15rem;
                border-radius: 50%;
                color: white;
            }
            & .logo-c {
                background-color: #fa5252;
            }
            & .logo-h {
                background-color: #20c997;
            }
            & .logo-u {
                background-color: #748ffc;
            }
        }

        & ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            & li {
                position: relative;
                font-size: 1rem;
                margin: 0 0.625rem;
                cursor: pointer;
                opacity: 0.3;
                &:hover {
                    opacity: 1;
                    & span {
                        display: block;
                    }
                }
                &:last-of-type {
                    margin-right: 0;
                }
                & span {
                    display: none;
                    position: absolute;
                    top: -0.5rem;
                    right: -0.5rem;
                    width: 6px;
                    height: 6px;
                    border-radius: 3px;
                    background-color: #fa5252;
                }
            }
        }
    }
`

export const MainWrapper = styled.div`
    margin: 6rem 0;
    padding: 0 1rem;

    & .inner {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        padding-bottom: 6rem;
        border-bottom: 2px solid #fa5252;

        & .intro-title {
            padding-top: 4rem;
            & h1 {
                font-weight: bold;
                font-size: 4rem;
                margin-bottom: 2rem;
                @media screen and (max-width: 600px){
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                }
            }
            & h2 {
                color: #ced4da;
                font-size: 4rem;
                margin-bottom: 4rem;
                word-break: keep-all;
                line-height: 1.2;
                @media screen and (max-width: 600px){
                    font-size: 3rem;
                    margin-bottom: 3rem;
                }
                & strong {
                    font-weight: bold;
                    color: #212529;
                }
            }
        }

        & .intro-content {
            & h1 {
                font-weight: 700;
                font-size: 1.25rem;
                color: #212529;
                padding-bottom: 2rem;
                border-bottom: 2px solid #212529;
            }
        }
    }
`;

export const ListItem = styled.li`
    cursor: pointer;
    
    & h2 {
        position: relative;
        line-height: calc(4rem - 1px);
        border-bottom: 1px solid #dee2e6;
    }
    &.active > h2 {
        color: #748ffc;
    }
    &.active > p {
        padding: 1.5rem;
        height: auto;
        border-bottom: 1px solid #dee2e6;
        word-break: keep-all;
    }
    &.active svg {
        transform: translateY(-50%) rotate(180deg);
    }
    & p {
        display: block;
        width: 100%;
        height: 0px;
        padding: 0 1.5rem;
        overflow: hidden;
        box-sizing: border-box;
        font-size: 0.875rem;
        margin-bottom: 2rem;
        line-height: 1.75rem;
        background-color: #f5f5f5;
        transition: all 0.2s;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
    & svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1rem;
        right: 1rem;
    }
`

export const SkillWrapper = styled.div`
    margin-bottom: 6rem;
    padding: 0 1rem;

    & .inner {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        padding-bottom: 5rem;
        border-bottom: 2px solid #20c997;

        & h1 {
            font-weight: bold;
            font-size: 2rem;
            margin-bottom: 4rem;
        }

        & > div {
            width: 100%;
            & div {
                margin-bottom: 2rem;
                &:last-of-type {
                    margin-bottom: 0;
                }
                & h2 {
                    font-size: 1.25rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    padding-bottom: 0.5rem;
                }
            }
        }
    }
`

export const SkillList = styled.ul`
    display: flex;
    max-width: calc(1000px + 2rem);
    margin-left: -1rem;
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (max-width: 600px) {
        margin-left: 0;
    }
    & li {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        @media only screen and (max-width: 600px) {
            padding: 1rem 0;
        }
        & span {
            width: 120px;
            font-size: 0.875rem;
            line-height: 1.75rem;
        }
        & .percent {
            position: relative;
            flex: 1;
            height: 1.75rem;
            background: #e9ecef;
            border-radius: 0.25rem;
            & div {
                position: absolute;
                height: 100%;
                font-size: 0.875rem;
                line-height: 1.75rem;
                padding: 0 0.5rem;
                text-align: right;
                border-radius: 0.25rem;
                color: #ffffff;
                overflow: hidden;
            }
            & .p-80 {
                width: 80%;
                background-color: #fa5252;
            }
            & .p-70 {
                width: 70%;
                background-color: #748ffc;
            }
            & .p-60 {
                width: 60%;
                background-color: #20c997;
            }
        }
    }
`

export const ProjectWrapper = styled.div`
    padding: 10rem 1rem 0 1rem;
    margin-bottom: 6rem;
    opacity: 0;
    transition-duration: 0.5s;

    &.fadeIn {
        opacity: 1;
        padding-top: 0;
    }

    & .inner {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
        padding-bottom: 6rem;
        border-bottom: 2px solid #748ffc;

        & h1 {
            font-weight: bold;
            font-size: 2rem;
            margin-bottom: 4rem;
        }

        & ul {
            display: flex;
            max-width: calc(1000px + 2rem);
            margin-left: -1rem;
            flex-direction: row;
            flex-wrap: wrap;
            @media only screen and (max-width: 600px) {
                width: 100%;
                margin-left: 0;
            }
            & li {
                width: 50%;
                padding: 1rem;
                box-sizing: border-box;
                transition-duration: 0.2s;
                @media screen and (min-width: 600px) {
                    &:hover {
                        box-shadow: 3px 3px 15px rgb(0 0 0 / 10%);
                        border-radius: 0.5rem;
                    }
                }
                @media only screen and (max-width: 600px) {
                    width: 100%;
                    padding: 0;
                }
                & > a {
                    & .thumb {
                        display: block;
                        height: 260px;
                        background-color: #ced4da;
                        margin-bottom: 2rem;
                        overflow: hidden;
                        border-radius: 0.5rem;
                        & img {
                            display: block;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    & h2 {
                        font-weight: bold;
                        font-size: 1.25rem;
                        margin-bottom: 1rem;
                    }
                    & p {
                        line-height: 1.5;
                        word-break: keep-all;
                        margin-bottom: 2rem;
                    }
                }
            }
        }

        .link-box {
            display: flex;
            height: 2rem;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;

            & a, & svg{
                transition-duration: 0.2s;
            }

            & .github-icon {
                font-size: 2rem;
                margin-right: 1rem;
                &:hover {
                    color: #f14e32;
                }
            }
            & .site {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.875rem;
                height: 100%;
                padding: 0 1rem;
                border: 1px solid #adb5bd;
                border-radius: 1rem;
                &:hover {
                    background-color: #748ffc;
                    border: 1px solid #748ffc;
                    & span {
                        color: white;
                    }
                }
            }
        }
    }
`

export const ContactWrapper = styled.div`
    padding-top: 10rem;
    margin-bottom: 6rem;
    opacity: 0;
    transition-duration: 0.5s;

    &.fadeIn {
        opacity: 1;
        padding-top: 0;
    }

    & .inner {
        position: relative;
        max-width: 1000px;
        padding: 0 1rem;
        margin: 0 auto;

        & h1 {
            font-weight: bold;
            font-size: 2rem;
            margin-bottom: 4rem;
        }

        & > div {
            display: flex;
            flex-direction: row;
            @media only screen and (max-width: 600px) {
                flex-direction: column;
            }
            & > div {
                width: 50%;
                @media only screen and (max-width: 600px) {
                    width: 100%;
                }
            }
            & .logo {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: #f1f3f5;
                border-radius: 0.5rem;
                @media only screen and (max-width: 600px) {
                    padding: 4rem 0;
                }
                & div {
                    width: 4rem;
                    height: 4rem;
                    text-align: center;
                    line-height: 4.15rem;
                    border-radius: 50%;
                    color: white;
                    font-size: 2rem;
                }
                & .logo-c {
                    background-color: #fa5252;
                }
                & .logo-h {
                    background-color: #20c997;
                }
                & .logo-u {
                    background-color: #748ffc;
                }
            }
            & .my-info {
                padding-left: 2rem;
                @media only screen and (max-width: 600px) {
                    padding: 0;
                    margin-top: 2rem;
                }
                & div {
                    margin-bottom: 2rem;
                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
                & h2 {
                    font-size: 1rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
            }
        }
    }
`

export const FooterWrapper = styled.div`
    text-align: center;
    padding: 1.25rem 0;
    border-top: 1px solid #ced4da;
    & div {
        padding: 0 1rem;
        line-height: 1.5;
    }   
`