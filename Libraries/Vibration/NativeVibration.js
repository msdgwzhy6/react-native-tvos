/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type {TurboModule} from '../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../TurboModule/TurboModuleRegistry';
import Platform from '../Utilities/Platform';

export interface Spec extends TurboModule {
  +getConstants: () => {||};
  +vibrate: (pattern?: number) => void;

  // Android only
  +vibrateByPattern: (pattern: Array<number>, repeat: number) => void;
  +cancel: () => void;
}

const Placeholder = {
  getConstants: () => { return []; },
  vibrate: (pattern?: number) => {}
};

export default Platform.isTVOS ? Placeholder: (TurboModuleRegistry.getEnforcing<Spec>('Vibration'): Spec);