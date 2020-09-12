import '../third-party/vexflow.js';

export function generateSequence(length) {
    const octave = [4, 5];
    const note = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const result = [];
    for(let i = 0; i < length; i++) {
        const o = Math.floor(Math.random() * octave.length);
        const n = Math.floor(Math.random() * note.length);
        const pair = [octave[o], note[n]];
        result.push(pair)
    }
    return result
}

function mapNote(note) {
    const map = {
        A: 'ля',
        B: 'си',
        C: 'до',
        D: 'ре',
        E: 'ми',
        F: 'фа',
        G: 'соль',
    };

    return map[note];
}

function mapToRussian([octave, note]) {
    return [octave - 3, mapNote(note)];
}

export function renderSequence(sequence, elementId) {
    const ul = document.getElementById(elementId);
    ul.innerHTML = sequence
        .map(mapToRussian)
        .map(([o, n]) => `<li>Нота ${n.toUpperCase()} ${o}й октавы</li>`).join('');
}

export function renderAnswer(sequence, elementId) {
    const notes = sequence.map((([o, n]) => `${n}${o}`)).join(', ');
    const vf = new Vex.Flow.Factory({
        renderer: {elementId, width: 500, height: 200}
      });
      
    const score = vf.EasyScore();
    const system = vf.System();
      
    system.addStave({
        voices: [
            score.voice(score.notes(notes)),
        ]
    }).addClef('treble').addTimeSignature('4/4');
      
    vf.draw();
}