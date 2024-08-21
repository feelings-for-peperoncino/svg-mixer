function generateSVG() {
  const text = document.getElementById('text').value;
  const fontWeight = document.getElementById('fontWeight').value || 400;
  const fontSize = document.getElementById('fontSize').value || 16;
  const color = document.getElementById('color').value || '#000000';
  const x = document.getElementById('x').value || 0;
  const y = document.getElementById('y').value || 0;

  const textAnchor = document.getElementById('textAnchor').checked ? 'middle' : 'start';
  const dominantBaseline = document.getElementById('dominantBaseline').checked ? 'middle' : 'auto';

  const svgContent = `
<svg viewBox="0 0 300 300" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
<image href="example.jpg" x="0" y="0" width="300" height="300" />
<text x="${x}" y="${y}" font-weight="${fontWeight}" font-size="${fontSize}px" fill="${color}" text-anchor="${textAnchor}" dominant-baseline="${dominantBaseline}">${text}</text>
</svg>`;

  document.getElementById('svg-preview').innerHTML = svgContent;
  document.getElementById('output').value = svgContent;
}

// 初期読み込み時にSVGを生成
generateSVG();