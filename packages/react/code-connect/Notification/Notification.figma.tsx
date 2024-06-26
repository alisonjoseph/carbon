/**
 * Copyright IBM Corp. 2016, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-nocheck
import React from 'react';
import {
  InlineNotification,
  ToastNotification,
  ActionableNotification,
} from '@carbon/react';
import figma from '@figma/code-connect';

const sharedNotificationProps = {
  title: figma.string('Title text'),
  subtitle: figma.string('Message text'),
  caption: figma.string('Time text'), //only used on toast
  kind: figma.enum('Status', {
    Info: 'info',
    Success: 'success',
    Warning: 'warning',
    Error: 'error',
    // Figma missing info-square and warning-alt
  }),
  hideCloseButton: figma.boolean('Close', {
    true: false,
    false: true,
  }),
  lowContrast: figma.boolean('High contrast', {
    true: false,
    false: true,
  }),
  actionable: figma.boolean('Actionable'),
  // type: figma.enum("Type", {
  //   "Inline short": "inline-short",
  //   "Inline long": "inline-long",
  //   Toast: "toast",
  // }),
};

figma.connect(
  InlineNotification,
  'https://www.figma.com/file/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?type=design&node-id=4179-105911&mode=design&t=lJU3KHSU1pTpZ32z-4',
  {
    variant: { Type: 'Inline short' },

    props: sharedNotificationProps,
    example: ({ title, kind, subtitle, hideCloseButton }) => (
      // Disclaimer: Code Connect is currently in beta and integration with Carbon
      // React is in an exploratory phase. Code sample below may be incomplete.
      <InlineNotification
        title={title}
        kind={kind}
        subtitle={subtitle}
        hideCloseButton={hideCloseButton}
      />
    ),
  }
);

figma.connect(
  InlineNotification,
  'https://www.figma.com/file/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?type=design&node-id=4179-105911&mode=design&t=lJU3KHSU1pTpZ32z-4',
  {
    variant: { Type: 'Inline long' },
    props: sharedNotificationProps,
    example: ({ title, kind, subtitle, hideCloseButton, lowContrast }) => (
      // Disclaimer: Code Connect is currently in beta and integration with Carbon
      // React is in an exploratory phase. Code sample below may be incomplete.
      <InlineNotification
        title={title}
        kind={kind}
        subtitle={subtitle}
        hideCloseButton={hideCloseButton}
        lowContrast={lowContrast}
      />
    ),
  }
);

figma.connect(
  ToastNotification,
  'https://www.figma.com/file/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?type=design&node-id=4179-105911&mode=design&t=WhsTspVnawA9vgXk-4',
  {
    variant: { Type: 'Toast' },
    props: sharedNotificationProps,
    example: ({ title, kind, subtitle, caption, lowContrast }) => (
      // Disclaimer: Code Connect is currently in beta and integration with Carbon
      // React is in an exploratory phase. Code sample below may be incomplete.
      <ToastNotification
        kind={kind}
        title={title}
        subtitle={subtitle}
        caption={caption}
        lowContrast={lowContrast}
      />
    ),
  }
);

// this isn't working, perhaps a bug? https://github.com/figma/code-connect/issues/45
figma.connect(
  ActionableNotification,
  'https://www.figma.com/file/YAnB1jKx0yCUL29j6uSLpg/(v11)-All-themes---Carbon-Design-System?type=design&node-id=4179-105911&mode=design&t=WhsTspVnawA9vgXk-4',
  {
    variant: { Actionable: 'True' }, // <--doesn't work
    // variant: { Type: 'Inline short',  Actionable: 'True'} <--doesn't work
    props: sharedNotificationProps,
    example: ({
      title,
      kind,
      subtitle,
      hideCloseButton,
      actionable,
      lowContrast,
    }) => (
      // Disclaimer: Code Connect is currently in beta and integration with Carbon
      // React is in an exploratory phase. Code sample below may be incomplete.
      <>
        actionable: {actionable}
        <ActionableNotification
          kind={kind}
          title={title}
          subtitle={subtitle}
          hideCloseButton={hideCloseButton}
          lowContrast={lowContrast}
          // actionButtonLabel="Figma treats this as a separate component"
          // onActionButtonClick={() => myFunction()}
          // onClose={() => myFunction()}
          // onCloseButtonClick={() => myFunction()}
          // statusIconDescription="notification"
        />
      </>
    ),
  }
);
