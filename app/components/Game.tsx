'use client';

import { useMemo, useState } from 'react';
import { ranks } from '@/lib/data';

type CellState = 'empty' | 'hit' | 'miss';

const initialCells = (): CellState[] => Array.from({ length: 9 }, () => 'empty');

function directionHint(selected: number, target: number): string {
  const rowSel = Math.floor(selected / 3);
  const colSel = selected % 3;
  const rowTar = Math.floor(target / 3);
  const colTar = target % 3;
  const vertical = rowTar < rowSel ? 'Bắc' : rowTar > rowSel ? 'Nam' : '';
  const horizontal = colTar < colSel ? 'Tây' : colTar > colSel ? 'Đông' : '';
  return [vertical, horizontal].filter(Boolean).join(' - ') || 'Đã sát bên!';
}

function computeRank(winCount: number) {
  let current = ranks[0];
  for (const r of ranks) {
    if (winCount >= r.min) current = r;
  }
  const next = ranks.find(r => r.min > current.min);
  const progress = next ? Math.min(100, Math.max(0, ((winCount - current.min) / (next.min - current.min)) * 100)) : 100;
  return { current, next, progress };
}

export function Game() {
  const [hiddenPot, setHiddenPot] = useState(() => Math.floor(Math.random() * 9));
  const [attempts, setAttempts] = useState(3);
  const [wins, setWins] = useState(0);
  const [cells, setCells] = useState<CellState[]>(initialCells);
  const [status, setStatus] = useState('Bịt mắt! Hãy chọn ô và đập niêu.');
  const [hint, setHint] = useState('Gợi ý hướng sẽ xuất hiện sau mỗi cú đập.');

  const { current, next, progress } = useMemo(() => computeRank(wins), [wins]);

  const resetGame = (shuffle: boolean) => {
    setAttempts(3);
    setCells(initialCells());
    setStatus('Bịt mắt! Hãy chọn ô và đập niêu.');
    setHint('Gợi ý hướng sẽ xuất hiện sau mỗi cú đập.');
    if (shuffle) setHiddenPot(Math.floor(Math.random() * 9));
  };

  const endRound = (success: boolean, index?: number) => {
    if (success) {
      setStatus('Chuẩn! Bạn đã đập trúng niêu.');
      setWins(prev => prev + 1);
    } else {
      setStatus('Hết lượt! Niêu đã lộ vị trí.');
      setCells(prev =>
        prev.map((cell, idx) => {
          if (idx === hiddenPot) return 'hit';
          if (idx === index) return 'miss';
          return cell;
        })
      );
    }
  };

  const handleSwing = (index: number) => {
    if (attempts <= 0) return;
    if (cells[index] !== 'empty') return;

    const isHit = index === hiddenPot;
    setAttempts(prev => prev - 1);

    if (isHit) {
      setCells(prev => prev.map((cell, idx) => (idx === index ? 'hit' : cell)));
      endRound(true);
      return;
    }

    const hintText = directionHint(index, hiddenPot);
    setCells(prev => prev.map((cell, idx) => (idx === index ? 'miss' : cell)));
    setHint(`Gợi ý: Niêu ở hướng ${hintText}.`);
    setStatus(attempts - 1 > 0 ? 'Sai vị trí, thử lại!' : 'Hết lượt rồi.');

    if (attempts - 1 === 0) {
      endRound(false, index);
    }
  };

  return (
    <section id="game" className="container section">
      <div className="section-head">
        <div>
          <h2>Game dân gian online: Đập niêu ba miền</h2>
          <p className="sub">
            Trò chơi đập niêu hiện đại: tìm đúng vị trí niêu đất chỉ bằng cảm nhận phương hướng và số lượt hạn chế.
          </p>
        </div>
        <div className="pill pill-ghost">Đập niêu</div>
      </div>
      <div className="game card">
        <div className="info">
          <div className="score">
            <span>Lượt: {attempts}</span>
            <span>Thắng: {wins}</span>
          </div>
          <div className="rank-box">
            <div className="rank-title">Cấp bậc: {current.name}</div>
            <div className="rank-progress">
              <div className="rank-progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <p className="rank-note">{next ? `Cần ${next.min - wins} trận thắng để lên "${next.name}".` : 'Bạn đã đạt đỉnh Huyền thoại!'}</p>
          </div>
          <div className="status">{status}</div>
          <p className="hint">{hint}</p>
          <div className="cta">
            <button className="btn primary" onClick={() => resetGame(false)}>
              Chơi lại
            </button>
            <button className="btn ghost" onClick={() => resetGame(true)}>
              Đổi vị trí niêu
            </button>
          </div>
        </div>
        <div className="board">
          {cells.map((cell, idx) => (
            <button
              key={idx}
              className={`cell ${cell === 'hit' ? 'hit' : cell === 'miss' ? 'miss' : ''}`}
              onClick={() => handleSwing(idx)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
