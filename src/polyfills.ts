import './zone-flags';
import 'zone.js';  // Included with Angular CLI.

(window as any).global = window;
import * as process from 'process';
(window as any).process = process;
import { Buffer } from 'buffer';
(window as any).Buffer = Buffer;