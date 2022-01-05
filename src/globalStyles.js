import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
${({ theme }) => `
    body,
    html,
    a {
        font-family: 'Cabin', 'Ubuntu', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: ${theme.background};
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
    width: 1em;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #88888833;
        border-radius: 10px;
    }



    a:hover {
        color: ${theme.accent.main};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Raleway', 'Ubuntu', sans-serif;
        color: ${theme.text};
        font-size: 2.575rem;
        line-height: 3.0625rem;

        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    p {
        color: ${theme.text};
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: ${theme.accent.secondary};

        :hover {
            color: ${theme.accent.main};
        }
    }

    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: ${theme.accent.main};
    }
`}
`;

export default Styles;
