import { r as registerInstance, h, c as getElement } from './index-70ad26c6.js';

const dlcCssterminalBlockCss = "@keyframes appear{0%{visibility:hidden}100%{visibility:visible}}.terminal{}.terminal__content-block{padding:calc(0.5 * var(--dlc-cssterminal-hem, 10px) );color:var(--dlc-cssterminal-primary-font-color, #fff)}.terminal__content-shell{display:inline-block;font-weight:bolder;padding-right:calc(0.4 * var(--dlc-cssterminal-hem, 10px) );color:var(--dlc-cssterminal-primary-font-color, #fff)}.terminal__content-command{display:inline-block;font-weight:lighter;border-right:calc(0.4 * var(--dlc-cssterminal-hem, 10px) ) solid var(--dlc-cssterminal-secondary-font-color, #bfbdbd);white-space:nowrap;overflow:hidden;vertical-align:bottom;color:var(--dlc-cssterminal-primary-font-color, #fff);}.terminal__content-command--2{animation:typewriter2 calc(0.3*1s - 0.2s) steps(3) 1s 1 normal both}@keyframes typewriter2{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(0.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--3{animation:typewriter3 calc(0.45*1s - 0.2s) steps(4) 1s 1 normal both}@keyframes typewriter3{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(1.2*1.8*1em);border-right-width:0}}.terminal__content-command--4{animation:typewriter4 calc(0.6*1s - 0.2s) steps(6) 1s 1 normal both}@keyframes typewriter4{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(1.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--5{animation:typewriter5 calc(0.75*1s - 0.2s) steps(7) 1s 1 normal both}@keyframes typewriter5{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(1.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--6{animation:typewriter6 calc(0.9*1s - 0.2s) steps(9) 1s 1 normal both}@keyframes typewriter6{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(2.2*1.8*1em);border-right-width:0}}.terminal__content-command--7{animation:typewriter7 calc(1.05*1s - 0.2s) steps(10) 1s 1 normal both}@keyframes typewriter7{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(2.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--8{animation:typewriter8 calc(1.2*1s - 0.2s) steps(12) 1s 1 normal both}@keyframes typewriter8{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(2.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--9{animation:typewriter9 calc(1.35*1s - 0.2s) steps(13) 1s 1 normal both}@keyframes typewriter9{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(3.2*1.8*1em);border-right-width:0}}.terminal__content-command--10{animation:typewriter10 calc(1.5*1s - 0.2s) steps(15) 1s 1 normal both}@keyframes typewriter10{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(3.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--11{animation:typewriter11 calc(1.65*1s - 0.2s) steps(16) 1s 1 normal both}@keyframes typewriter11{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(3.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--12{animation:typewriter12 calc(1.8*1s - 0.2s) steps(18) 1s 1 normal both}@keyframes typewriter12{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(4.2*1.8*1em);border-right-width:0}}.terminal__content-command--13{animation:typewriter13 calc(1.95*1s - 0.2s) steps(19) 1s 1 normal both}@keyframes typewriter13{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(4.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--14{animation:typewriter14 calc(2.1*1s - 0.2s) steps(21) 1s 1 normal both}@keyframes typewriter14{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(4.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--15{animation:typewriter15 calc(2.25*1s - 0.2s) steps(22) 1s 1 normal both}@keyframes typewriter15{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(5.2*1.8*1em);border-right-width:0}}.terminal__content-command--16{animation:typewriter16 calc(2.4*1s - 0.2s) steps(24) 1s 1 normal both}@keyframes typewriter16{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(5.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--17{animation:typewriter17 calc(2.55*1s - 0.2s) steps(25) 1s 1 normal both}@keyframes typewriter17{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(5.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--18{animation:typewriter18 calc(2.7*1s - 0.2s) steps(27) 1s 1 normal both}@keyframes typewriter18{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(6.2*1.8*1em);border-right-width:0}}.terminal__content-command--19{animation:typewriter19 calc(2.85*1s - 0.2s) steps(28) 1s 1 normal both}@keyframes typewriter19{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(6.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--20{animation:typewriter20 calc(3*1s - 0.2s) steps(30) 1s 1 normal both}@keyframes typewriter20{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(6.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--21{animation:typewriter21 calc(3.15*1s - 0.2s) steps(31) 1s 1 normal both}@keyframes typewriter21{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(7.2*1.8*1em);border-right-width:0}}.terminal__content-command--22{animation:typewriter22 calc(3.3*1s - 0.2s) steps(33) 1s 1 normal both}@keyframes typewriter22{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(7.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--23{animation:typewriter23 calc(3.45*1s - 0.2s) steps(34) 1s 1 normal both}@keyframes typewriter23{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(7.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--24{animation:typewriter24 calc(3.6*1s - 0.2s) steps(36) 1s 1 normal both}@keyframes typewriter24{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(8.2*1.8*1em);border-right-width:0}}.terminal__content-command--25{animation:typewriter25 calc(3.75*1s - 0.2s) steps(37) 1s 1 normal both}@keyframes typewriter25{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(8.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--26{animation:typewriter26 calc(3.9*1s - 0.2s) steps(39) 1s 1 normal both}@keyframes typewriter26{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(8.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--27{animation:typewriter27 calc(4.05*1s - 0.2s) steps(40) 1s 1 normal both}@keyframes typewriter27{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(9.2*1.8*1em);border-right-width:0}}.terminal__content-command--28{animation:typewriter28 calc(4.2*1s - 0.2s) steps(42) 1s 1 normal both}@keyframes typewriter28{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(9.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--29{animation:typewriter29 calc(4.35*1s - 0.2s) steps(43) 1s 1 normal both}@keyframes typewriter29{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(9.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--30{animation:typewriter30 calc(4.5*1s - 0.2s) steps(45) 1s 1 normal both}@keyframes typewriter30{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(10.2*1.8*1em);border-right-width:0}}.terminal__content-command--31{animation:typewriter31 calc(4.65*1s - 0.2s) steps(46) 1s 1 normal both}@keyframes typewriter31{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(10.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--32{animation:typewriter32 calc(4.8*1s - 0.2s) steps(48) 1s 1 normal both}@keyframes typewriter32{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(10.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--33{animation:typewriter33 calc(4.95*1s - 0.2s) steps(49) 1s 1 normal both}@keyframes typewriter33{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(11.2*1.8*1em);border-right-width:0}}.terminal__content-command--34{animation:typewriter34 calc(5.1*1s - 0.2s) steps(51) 1s 1 normal both}@keyframes typewriter34{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(11.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--35{animation:typewriter35 calc(5.25*1s - 0.2s) steps(52) 1s 1 normal both}@keyframes typewriter35{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(11.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--36{animation:typewriter36 calc(5.4*1s - 0.2s) steps(54) 1s 1 normal both}@keyframes typewriter36{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(12.2*1.8*1em);border-right-width:0}}.terminal__content-command--37{animation:typewriter37 calc(5.55*1s - 0.2s) steps(55) 1s 1 normal both}@keyframes typewriter37{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(12.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--38{animation:typewriter38 calc(5.7*1s - 0.2s) steps(57) 1s 1 normal both}@keyframes typewriter38{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(12.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--39{animation:typewriter39 calc(5.85*1s - 0.2s) steps(58) 1s 1 normal both}@keyframes typewriter39{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(13.2*1.8*1em);border-right-width:0}}.terminal__content-command--40{animation:typewriter40 calc(6*1s - 0.2s) steps(60) 1s 1 normal both}@keyframes typewriter40{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(13.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--41{animation:typewriter41 calc(6.15*1s - 0.2s) steps(61) 1s 1 normal both}@keyframes typewriter41{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(13.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--42{animation:typewriter42 calc(6.3*1s - 0.2s) steps(63) 1s 1 normal both}@keyframes typewriter42{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(14.2*1.8*1em);border-right-width:0}}.terminal__content-command--43{animation:typewriter43 calc(6.45*1s - 0.2s) steps(64) 1s 1 normal both}@keyframes typewriter43{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(14.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--44{animation:typewriter44 calc(6.6*1s - 0.2s) steps(66) 1s 1 normal both}@keyframes typewriter44{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(14.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--45{animation:typewriter45 calc(6.75*1s - 0.2s) steps(67) 1s 1 normal both}@keyframes typewriter45{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(15.2*1.8*1em);border-right-width:0}}.terminal__content-command--46{animation:typewriter46 calc(6.9*1s - 0.2s) steps(69) 1s 1 normal both}@keyframes typewriter46{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(15.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--47{animation:typewriter47 calc(7.05*1s - 0.2s) steps(70) 1s 1 normal both}@keyframes typewriter47{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(15.8666666667*1.8*1em);border-right-width:0}}.terminal__content-command--48{animation:typewriter48 calc(7.2*1s - 0.2s) steps(72) 1s 1 normal both}@keyframes typewriter48{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(16.2*1.8*1em);border-right-width:0}}.terminal__content-command--49{animation:typewriter49 calc(7.35*1s - 0.2s) steps(73) 1s 1 normal both}@keyframes typewriter49{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(16.5333333333*1.8*1em);border-right-width:0}}.terminal__content-command--50{animation:typewriter50 calc(7.5*1s - 0.2s) steps(75) 1s 1 normal both}@keyframes typewriter50{0%{width:0}99%{border-right-width:calc(0.4 * var(--dlc-cssterminal-hem, 10px) )}100%{width:calc(16.8666666667*1.8*1em);border-right-width:0}}.terminal__content-print{color:var(--dlc-cssterminal-secondary-font-color, #bfbdbd);word-break:break-word}.terminal__content--delay-2-anim{animation:appear backwards 0.5s;animation-delay:calc( ((2 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-2{animation-delay:calc( ((2 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-3-anim{animation:appear backwards 0.5s;animation-delay:calc( ((3 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-3{animation-delay:calc( ((3 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-4-anim{animation:appear backwards 0.5s;animation-delay:calc( ((4 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-4{animation-delay:calc( ((4 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-5-anim{animation:appear backwards 0.5s;animation-delay:calc( ((5 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-5{animation-delay:calc( ((5 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-6-anim{animation:appear backwards 0.5s;animation-delay:calc( ((6 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-6{animation-delay:calc( ((6 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-7-anim{animation:appear backwards 0.5s;animation-delay:calc( ((7 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-7{animation-delay:calc( ((7 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-8-anim{animation:appear backwards 0.5s;animation-delay:calc( ((8 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-8{animation-delay:calc( ((8 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-9-anim{animation:appear backwards 0.5s;animation-delay:calc( ((9 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-9{animation-delay:calc( ((9 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-10-anim{animation:appear backwards 0.5s;animation-delay:calc( ((10 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-10{animation-delay:calc( ((10 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-11-anim{animation:appear backwards 0.5s;animation-delay:calc( ((11 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-11{animation-delay:calc( ((11 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-12-anim{animation:appear backwards 0.5s;animation-delay:calc( ((12 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-12{animation-delay:calc( ((12 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-13-anim{animation:appear backwards 0.5s;animation-delay:calc( ((13 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-13{animation-delay:calc( ((13 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-14-anim{animation:appear backwards 0.5s;animation-delay:calc( ((14 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-14{animation-delay:calc( ((14 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-15-anim{animation:appear backwards 0.5s;animation-delay:calc( ((15 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-15{animation-delay:calc( ((15 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-16-anim{animation:appear backwards 0.5s;animation-delay:calc( ((16 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-16{animation-delay:calc( ((16 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-17-anim{animation:appear backwards 0.5s;animation-delay:calc( ((17 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-17{animation-delay:calc( ((17 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-18-anim{animation:appear backwards 0.5s;animation-delay:calc( ((18 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-18{animation-delay:calc( ((18 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-19-anim{animation:appear backwards 0.5s;animation-delay:calc( ((19 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-19{animation-delay:calc( ((19 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-20-anim{animation:appear backwards 0.5s;animation-delay:calc( ((20 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-20{animation-delay:calc( ((20 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-21-anim{animation:appear backwards 0.5s;animation-delay:calc( ((21 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-21{animation-delay:calc( ((21 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-22-anim{animation:appear backwards 0.5s;animation-delay:calc( ((22 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-22{animation-delay:calc( ((22 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-23-anim{animation:appear backwards 0.5s;animation-delay:calc( ((23 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-23{animation-delay:calc( ((23 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-24-anim{animation:appear backwards 0.5s;animation-delay:calc( ((24 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-24{animation-delay:calc( ((24 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-25-anim{animation:appear backwards 0.5s;animation-delay:calc( ((25 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-25{animation-delay:calc( ((25 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-26-anim{animation:appear backwards 0.5s;animation-delay:calc( ((26 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-26{animation-delay:calc( ((26 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-27-anim{animation:appear backwards 0.5s;animation-delay:calc( ((27 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-27{animation-delay:calc( ((27 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-28-anim{animation:appear backwards 0.5s;animation-delay:calc( ((28 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-28{animation-delay:calc( ((28 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-29-anim{animation:appear backwards 0.5s;animation-delay:calc( ((29 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-29{animation-delay:calc( ((29 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-30-anim{animation:appear backwards 0.5s;animation-delay:calc( ((30 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-30{animation-delay:calc( ((30 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-31-anim{animation:appear backwards 0.5s;animation-delay:calc( ((31 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-31{animation-delay:calc( ((31 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-32-anim{animation:appear backwards 0.5s;animation-delay:calc( ((32 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-32{animation-delay:calc( ((32 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-33-anim{animation:appear backwards 0.5s;animation-delay:calc( ((33 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-33{animation-delay:calc( ((33 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-34-anim{animation:appear backwards 0.5s;animation-delay:calc( ((34 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-34{animation-delay:calc( ((34 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-35-anim{animation:appear backwards 0.5s;animation-delay:calc( ((35 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-35{animation-delay:calc( ((35 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-36-anim{animation:appear backwards 0.5s;animation-delay:calc( ((36 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-36{animation-delay:calc( ((36 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-37-anim{animation:appear backwards 0.5s;animation-delay:calc( ((37 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-37{animation-delay:calc( ((37 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-38-anim{animation:appear backwards 0.5s;animation-delay:calc( ((38 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-38{animation-delay:calc( ((38 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-39-anim{animation:appear backwards 0.5s;animation-delay:calc( ((39 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-39{animation-delay:calc( ((39 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-40-anim{animation:appear backwards 0.5s;animation-delay:calc( ((40 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-40{animation-delay:calc( ((40 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-41-anim{animation:appear backwards 0.5s;animation-delay:calc( ((41 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-41{animation-delay:calc( ((41 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-42-anim{animation:appear backwards 0.5s;animation-delay:calc( ((42 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-42{animation-delay:calc( ((42 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-43-anim{animation:appear backwards 0.5s;animation-delay:calc( ((43 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-43{animation-delay:calc( ((43 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-44-anim{animation:appear backwards 0.5s;animation-delay:calc( ((44 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-44{animation-delay:calc( ((44 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-45-anim{animation:appear backwards 0.5s;animation-delay:calc( ((45 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-45{animation-delay:calc( ((45 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-46-anim{animation:appear backwards 0.5s;animation-delay:calc( ((46 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-46{animation-delay:calc( ((46 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-47-anim{animation:appear backwards 0.5s;animation-delay:calc( ((47 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-47{animation-delay:calc( ((47 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-48-anim{animation:appear backwards 0.5s;animation-delay:calc( ((48 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-48{animation-delay:calc( ((48 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-49-anim{animation:appear backwards 0.5s;animation-delay:calc( ((49 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-49{animation-delay:calc( ((49 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-50-anim{animation:appear backwards 0.5s;animation-delay:calc( ((50 / 10) * 1.5 )* 1s + 1s)}.terminal__content--delay-50{animation-delay:calc( ((50 / 10) * 1.5 )* 1s + 1s)}";

const DlcCssterminalBlock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * (optional) The delay that should last the result to appear (e.g. 14)
         */
        this.delay = 0;
    }
    componentWillLoad() {
        this.words = this.words ? this.words : this.calculateWords();
        this.totalDelay = this.calculateTotalDelay();
        this.shell = this.shell ? this.shell : this.el.parentElement.shell;
    }
    calculateWords() {
        return this.command ? this.command.length : 0;
        //return this.command ? this.command.trim().replace(" ", "").length : 0;
    }
    calculateTotalDelay() {
        return this.delay + this.words;
    }
    render() {
        return (h("div", { class: "terminal__content-block terminal__content--delay-" + this.delay + "-anim" }, h("div", { class: "terminal__content-shell", part: "terminal-content-shell" }, this.shell), h("div", { class: "terminal__content-command terminal__content-command--" + this.words + " terminal__content--delay-" + this.delay, part: "terminal-content-command" }, this.command), h("div", { class: "terminal__content-print terminal__content--delay-" + this.totalDelay + "-anim", part: "terminal-content-result" }, h("slot", null))));
    }
    get el() { return getElement(this); }
};
DlcCssterminalBlock.style = dlcCssterminalBlockCss;

export { DlcCssterminalBlock as dlc_cssterminal_block };
