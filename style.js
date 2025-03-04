const styles = `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f8f9fa;
}

header img {
    height: 50px;
    margin-right: 20px;
}

header h1 {
    font-size: 24px;
    color: #333;
}

.hero {
    position: relative;
    text-align: center;
    color: white;
    background: url('assets/screenshot1.png') no-repeat center center/contain;
    height: 60vh;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
    margin: 0;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0.5;
}

.hero button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 30px;
    font-size: 18px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: inline-block;
}

.hero button:hover {
    background-color: #0056b3;
}

footer {
    margin-top: auto;
    padding: 10px;
    text-align: center;
    background-color: #f8f9fa;
    color: #666;
    font-size: 14px;
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
