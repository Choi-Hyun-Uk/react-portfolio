import styled from 'styled-components';

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
            margin-bottom: 4rem;
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
                align-items: center;
                color: #ced4da;
                font-size: 4rem;
                word-break: keep-all;
                line-height: 1.2;
                margin-bottom: 1rem;
                @media screen and (max-width: 600px){
                    font-size: 3rem;
                }
                & strong {
                    font-weight: bold;
                    color: #212529;
                }
                & svg {
                    vertical-align: -5px;
                    color: #748ffc;
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
    &.active > .content-box {
        padding: 1.5rem;
        height: auto;
        border-bottom: 1px solid #dee2e6;
        word-break: keep-all;
    }
    &.active svg {
        transform: translateY(-50%) rotate(180deg);
    }
    & .content-box {
        display: block;
        width: 100%;
        height: 0px;
        padding: 0 1.5rem;
        overflow: hidden;
        box-sizing: border-box;
        font-size: 0.875rem;
        margin-bottom: 2rem;
        background-color: #f5f5f5;
        transition: all 0.2s;
        &:last-of-type {
            margin-bottom: 0;
        }
        & p {
            line-height: 1.5;
            margin-bottom: 0.5rem;
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
            & .p-90 {
                width: 90%;
                background: linear-gradient(to right, #748ffc, #fa5252);
            }
            & .p-80 {
                width: 80%;
                background: linear-gradient(to right, #20c997, #fa5252);
            }
            & .p-70 {
                width: 70%;
                background: linear-gradient(to right, #20c997, #748ffc);
            }
            & .p-60 {
                width: 60%;
                background: linear-gradient(to right, #748ffc, #20c997);
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
        padding-bottom: 4rem;
        border-bottom: 2px solid #748ffc;

        & h1 {
            font-weight: bold;
            font-size: 2rem;
            margin-bottom: 4rem;
            & > p {
                margin-top: 1rem;
                font-size: 0.875rem;
                font-weight: 400;
                color: #999999;
            }
        }

        & .design-list-box > ul {
            display: flex;
            max-width: calc(1000px + 2rem);
            margin-left: -1rem;
            flex-wrap: wrap;
            @media only screen and (max-width: 600px) {
                width: 100%;
                margin-left: 0;
            }
            & li {
                width: 50%;
                padding: 1rem;
                margin-bottom: 2rem;
                box-sizing: border-box;
                transition-duration: 0.2s;
                @media screen and (min-width: 600px) {
                    &:hover {
                        box-shadow: 0px 3px 10px rgb(0 0 0 / 10%);
                        border-radius: 0.5rem;
                        transform: translateY(-1rem);
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

export const PromotionItemWrap = styled.li`
    @media screen and (max-width: 600px){
        margin-bottom: 3rem;
    }
    & .thumbnail {
        cursor: pointer;
        height: 280px;
        overflow: hidden;
        margin-bottom: 1rem;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    & .title {
        font-size: 0.875rem;
        color: #999999;
        border-bottom: 1px solid #cccccc;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }

    & .other {
        display: flex;
        & p {
            &:first-of-type {
                padding-right: 0.5rem;
                margin-right: 0.5rem;
                border-right: 2px solid #cccccc;
            }
            font-size: 0.875rem;
            color: #999999;
        }
    }

    & .participation {
        display: flex;
        font-size: 0.875rem;
        margin-top: 1rem;
        color: #999999;
        & span {
            display: inline-block;
            margin-right: 5px;
        }
        & p {
            padding-right: 0.5rem;
            margin-right: 0.5rem;
            border-right: 2px solid #cccccc;
            &:last-of-type {
                padding-right: 0;
                margin-right: 0;
                border-right: none;
            }
        }
    }
`

export const ImageModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999999;
    overflow-y: scroll;
    &::after {
        content: "";
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const ImageModalContent = styled.div`
    position: relative;
    width: 80%;
    margin: 2rem auto;
    z-index: 2;
    background-color: white;
    box-sizing: border-box;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 600px){
        width: 100%;
        padding: 2rem 1rem;
    }

    & .head {
        margin-bottom: 2rem;
        & > h3 {
            font-weight: bold;
            margin-bottom: 1rem;
        }
        & > h4 {
            margin-top: 1rem;
            color: #999999;
            font-size: 0.875rem;
        }
        & .participation {
            font-size: 0.875rem;
            margin-top: 1rem;
            color: #999999;
            & span {
                margin-right: 5px;
            }
        }
        & > div {
            display: flex;
            & > p {
                padding-right: 0.5rem;
                margin-right: 0.5rem;
                border-right: 2px solid #cccccc;
                font-size: 0.875rem;
                color: #999999;
                &:last-of-type {
                    margin: 0;
                    padding: 0;
                    border: none;
                }
                @media screen and (max-width: 600px){
                    margin-bottom: 0.5rem;
                    padding: 0;
                    border: none;
                }
            }
        }
    }
    & .image-box { /* 이미지 박스 공통 */
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #cccccc;
        text-align: center;
        & h3 {
            display: inline-block;
            padding: 0.875rem 2rem;
            background-color: #748ffc;
            border-radius: 2rem;
            color: white;
            margin-bottom: 2rem;
        }
    }
    & .pc-version {
        & img {
            width: 100%;
            vertical-align: bottom;
        }
    }
    & .m-version {
        text-align: center;
        & img {
            width: 50%;
            vertical-align: bottom;
            @media screen and (max-width: 600px){
                width: 100%;
            }
        }
    }
    & .image-source {
        & > div {
            text-align: center;
            margin-bottom: 1rem;
            img {
                width: 50%;
                vertical-align: bottom;
                @media screen and (max-width: 600px){
                    width: 100%;
                }
            }
        }
    }
    & .sns-image {
        & > div {
            text-align: center;
            margin-bottom: 1rem;
            & > div {
                margin-bottom: 1rem;
            }
            img {
                width: 50%;
                vertical-align: bottom;
                @media screen and (max-width: 600px){
                    width: 100%;
                }
            }
        }
    }
    & .link-box {
        font-size: 0.875rem;
        margin-top: 1rem;
        color: #999999;
        & a {
            color: #748ffc;
            margin-left: 5px;
        }
    }
    & .link-box-none {
        font-size: 0.875rem;
        margin-top: 1rem;
        color: #999999;
    }
    & .close-btn {
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: white;
        cursor: pointer;
        @media screen and (max-width: 600px){
            right: 1rem;
        }
        & svg {
            font-size: 2rem;
        }
    }
`

export const SnsContentsWrap = styled.div`
    
`