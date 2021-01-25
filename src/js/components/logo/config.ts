const defaultBgColor = '#000000';

const svg = {
  flat: {
    width: 400,
    height: 50,
    maskPaths: [
      'M302.458 44.2l19.65-42.1h5.9l-19.65 42.1h-5.9z',
      'M328.408 34.775c-2-2.35-3-5.642-3-9.875 0-2.733.467-5.1 1.4-7.1.933-2 2.24-3.542 3.925-4.625 1.683-1.083 3.607-1.625 5.774-1.625 1.367 0 2.6.225 3.7.675 1.1.45 1.983 1.042 2.65 1.775V4.25l5.75-2.65v36.1h-5.75v-1.95c-.534.7-1.358 1.3-2.476 1.8s-2.357.75-3.724.75c-3.498 0-6.248-1.175-8.248-3.525zm12.325-2.6c.85-.416 1.558-1.04 2.125-1.875V19.5c-.5-.7-1.2-1.29-2.1-1.775-.9-.483-2.034-.725-3.4-.725-1.968 0-3.483.684-4.55 2.05-1.067 1.367-1.6 3.317-1.6 5.85 0 2.4.54 4.317 1.624 5.75 1.083 1.434 2.625 2.15 4.625 2.15 1.334 0 2.426-.207 3.276-.625z',
      'M375.308 27.15h-17.4c.367 1.867 1.108 3.342 2.226 4.425 1.116 1.084 2.558 1.625 4.325 1.625 2.23 0 4.115-.833 5.65-2.5l3.448 3.65c-1.133 1.233-2.467 2.2-4 2.9s-3.25 1.05-5.15 1.05c-2.5 0-4.666-.55-6.5-1.65-1.833-1.1-3.24-2.658-4.225-4.675s-1.475-4.375-1.475-7.075c0-2.733.5-5.108 1.5-7.125 1-2.017 2.416-3.558 4.25-4.625 1.833-1.066 3.982-1.6 6.45-1.6 3.267 0 5.933 1.025 8 3.075 2.066 2.05 3.1 5.06 3.1 9.025 0 1.467-.068 2.634-.2 3.5zm-5.45-4.9c-.168-1.866-.76-3.275-1.775-4.225-1.018-.95-2.242-1.425-3.675-1.425-1.834 0-3.31.5-4.425 1.5-1.117 1-1.825 2.384-2.125 4.15h12z',
      'M383.308 37.075c-1.833-.816-3.3-1.925-4.4-3.325l3.75-3.4c.867.834 1.884 1.55 3.05 2.15 1.167.6 2.467.9 3.9.9 1.233 0 2.25-.217 3.05-.65.8-.433 1.2-1.083 1.2-1.95 0-.732-.392-1.35-1.175-1.85s-2.125-1.133-4.024-1.9l-1-.4c-2.035-.866-3.585-1.6-4.65-2.2-1.068-.6-1.935-1.374-2.6-2.324-.67-.95-1-2.14-1-3.575 0-2.166.932-3.874 2.8-5.124 1.865-1.25 4.215-1.875 7.05-1.875 2.065 0 3.9.368 5.5 1.1 1.6.734 2.95 1.718 4.05 2.95l-3.85 3.15c-.835-.7-1.7-1.257-2.602-1.674-.9-.417-2-.625-3.3-.625s-2.342.193-3.125.576c-.783.383-1.175.925-1.175 1.625 0 .634.458 1.21 1.375 1.726.916.518 2.342 1.16 4.275 1.925 2.1.834 3.69 1.535 4.774 2.1 1.083.568 2.025 1.368 2.825 2.4.8 1.034 1.2 2.35 1.2 3.95 0 2.367-.893 4.218-2.675 5.55-1.784 1.334-4.192 2-7.226 2-2.165 0-4.165-.408-5.998-1.225z',
      'M14.21 37.05c0 2.434-.392 4.408-1.175 5.926-.784 1.516-1.96 2.69-3.525 3.524-1.567.833-3.65 1.467-6.25 1.9l-2.9-4.6c2.1-.367 3.725-.792 4.875-1.274C6.385 42.043 7.21 41.4 7.71 40.6s.75-1.85.75-3.15V17.2H1.41v-5.05h12.8v24.9zM8.91 7.6c-.667-.667-1-1.483-1-2.45s.333-1.775 1-2.425c.666-.65 1.466-.975 2.4-.975.966 0 1.783.325 2.45.975.667.65 1 1.458 1 2.425s-.333 1.783-1 2.45c-.667.667-1.483 1-2.45 1-.934 0-1.734-.332-2.4-1z',
      'M21.885 36.1c-1.75-1.466-2.625-3.565-2.625-6.3 0-1.866.483-3.433 1.45-4.7.966-1.266 2.225-2.208 3.775-2.825 1.55-.617 3.208-.925 4.975-.925 2.433 0 4.55.45 6.35 1.35v-1.5c0-1.633-.425-2.808-1.275-3.525-.85-.716-2.108-1.075-3.775-1.075-1.4 0-2.792.225-4.175.675-1.384.45-2.692 1.092-3.925 1.925l-1.75-4.7c1.333-.866 2.908-1.575 4.725-2.125 1.816-.55 3.69-.825 5.625-.825 2.9 0 5.316.667 7.25 2 1.933 1.333 2.9 3.867 2.9 7.6V37.7h-5.6v-2c-1.8 1.733-4.167 2.6-7.1 2.6-2.8 0-5.075-.733-6.825-2.2zm13.925-5.4v-3.3c-1.533-.767-3.35-1.15-5.45-1.15-1.6 0-2.925.3-3.975.9-1.05.6-1.575 1.483-1.575 2.65 0 1.033.433 1.866 1.3 2.5.866.633 2.083.95 3.65.95 2.4 0 4.416-.85 6.05-2.55z',
      'M44.21 12.15h6.15l5.9 16.2c.365 1.133.615 2.05.75 2.75.165-.9.415-1.816.75-2.75l5.85-16.2h6.1L59.76 37.7h-5.6l-9.95-25.55z',
      'M86.36 32.65h7.05v5.05H73.56v-5.05h7.05V17.2h-7.05v-5.05h12.8v20.5zM81.06 7.6c-.667-.667-1-1.483-1-2.45s.333-1.775 1-2.425c.666-.65 1.466-.975 2.4-.975.966 0 1.783.325 2.45.975.667.65 1 1.458 1 2.425s-.333 1.783-1 2.45c-.667.667-1.483 1-2.45 1-.934 0-1.734-.332-2.4-1z',
      'M98.734 37.226c-.75-.75-1.125-1.676-1.125-2.775 0-1.065.374-1.98 1.124-2.75.75-.766 1.675-1.15 2.775-1.15s2.04.385 2.824 1.15c.783.77 1.175 1.685 1.175 2.75 0 1.068-.385 1.984-1.15 2.75-.77.768-1.718 1.15-2.85 1.15-1.1 0-2.026-.374-2.776-1.124z',
      'M130.484 14.075c1.75 1.684 2.625 4.358 2.625 8.025v15.6h-5.75V23.3c0-2.2-.484-3.8-1.45-4.8-.968-1-2.25-1.5-3.85-1.5-1.7 0-3.068.484-4.1 1.45-1.035.967-1.55 2.55-1.55 4.75v14.5h-5.75V12.15h5.3v3.15c.5-1 1.474-1.875 2.924-2.625s3.042-1.125 4.775-1.125c2.8 0 5.074.843 6.824 2.525zM159.61 27.15h-17.4c.365 1.867 1.106 3.342 2.224 4.425 1.117 1.084 2.558 1.625 4.325 1.625 2.232 0 4.115-.833 5.65-2.5l3.45 3.65c-1.135 1.233-2.468 2.2-4 2.9-1.535.7-3.25 1.05-5.15 1.05-2.5 0-4.668-.55-6.5-1.65-1.835-1.1-3.243-2.658-4.226-4.675-.984-2.017-1.475-4.375-1.475-7.075 0-2.733.5-5.108 1.5-7.125 1-2.017 2.416-3.558 4.25-4.625 1.832-1.066 3.982-1.6 6.45-1.6 3.265 0 5.932 1.025 8 3.075 2.065 2.05 3.1 5.06 3.1 9.025 0 1.467-.068 2.634-.2 3.5zm-5.45-4.9c-.168-1.866-.76-3.275-1.776-4.225-1.017-.95-2.242-1.425-3.675-1.425-1.835 0-3.31.5-4.426 1.5-1.117 1-1.825 2.384-2.125 4.15h12zM169.86 43.15c2.432-.2 4.324-.51 5.674-.925 1.35-.418 2.308-1 2.875-1.75.565-.75.85-1.76.85-3.025v-1.5c-1.368 1.567-3.35 2.35-5.95 2.35-2.035 0-3.85-.508-5.45-1.524-1.6-1.017-2.86-2.533-3.776-4.55-.917-2.017-1.375-4.458-1.375-7.325 0-2.732.45-5.1 1.35-7.1s2.157-3.54 3.774-4.624c1.617-1.083 3.475-1.625 5.575-1.625 2.432 0 4.382.734 5.85 2.2v-1.6h5.75V35c0 2.933-.394 5.3-1.176 7.1-.784 1.8-2.05 3.158-3.8 4.075s-4.11 1.476-7.075 1.676l-3.1-4.7zm9.4-12.95V19.55c-.535-.733-1.218-1.34-2.05-1.825-.834-.483-1.8-.725-2.9-.725-1.9 0-3.35.675-4.35 2.025-1 1.35-1.5 3.31-1.5 5.875 0 2.434.507 4.358 1.524 5.774 1.017 1.418 2.458 2.125 4.325 2.125 2.166 0 3.815-.866 4.95-2.6zM214.408 12.9v9.45h-5.6V16.9h-.5c-2.633 0-4.667.617-6.1 1.85-1.434 1.234-2.15 3.084-2.15 5.55v8.35h7.15v5.05h-18.3v-5.05h5.4V17.2h-5.4v-5.05h10.75v4.1c.7-1.466 1.85-2.616 3.45-3.45 1.6-.833 3.366-1.25 5.3-1.25 2.3 0 4.3.45 6 1.35zM240.51 27.15h-17.4c.365 1.867 1.107 3.342 2.225 4.425 1.116 1.084 2.558 1.625 4.324 1.625 2.232 0 4.116-.833 5.65-2.5l3.45 3.65c-1.135 1.233-2.47 2.2-4 2.9-1.535.7-3.25 1.05-5.15 1.05-2.5 0-4.668-.55-6.5-1.65-1.834-1.1-3.242-2.658-4.226-4.675s-1.476-4.375-1.476-7.075c0-2.733.5-5.108 1.5-7.125 1-2.017 2.417-3.558 4.25-4.625 1.834-1.066 3.983-1.6 6.45-1.6 3.267 0 5.933 1.025 8 3.075 2.067 2.05 3.1 5.06 3.1 9.025 0 1.467-.066 2.634-.2 3.5zm-5.45-4.9c-.168-1.866-.76-3.275-1.776-4.225-1.017-.95-2.242-1.425-3.674-1.425-1.834 0-3.31.5-4.426 1.5s-1.824 2.384-2.125 4.15h12zM244.533 37.226c-.75-.75-1.125-1.676-1.125-2.775 0-1.065.375-1.98 1.125-2.75.75-.766 1.676-1.15 2.775-1.15s2.04.385 2.824 1.15c.783.77 1.176 1.685 1.176 2.75 0 1.068-.384 1.984-1.15 2.75-.768.768-1.717 1.15-2.85 1.15-1.1 0-2.025-.374-2.775-1.124zM257.608 34.75c-2.1-2.366-3.15-5.633-3.15-9.8 0-2.733.483-5.108 1.45-7.125.967-2.017 2.342-3.566 4.125-4.65 1.783-1.083 3.857-1.625 6.225-1.625 5.434 0 8.934 2.317 10.5 6.95l-5.45 1.85c-.866-2.233-2.532-3.35-5-3.35-1.9 0-3.374.717-4.425 2.15-1.05 1.434-1.574 3.367-1.574 5.8 0 2.434.524 4.35 1.573 5.75 1.05 1.4 2.492 2.1 4.326 2.1 2.665 0 4.415-1.25 5.25-3.75l5.448 1.7c-1.533 5.034-5.117 7.55-10.75 7.55-3.6 0-6.45-1.183-8.55-3.55zM283.01 34.726c-2.2-2.383-3.3-5.642-3.3-9.775 0-2.7.5-5.057 1.5-7.074 1-2.016 2.415-3.575 4.25-4.675 1.83-1.1 4-1.65 6.5-1.65s4.674.543 6.523 1.626c1.85 1.083 3.267 2.633 4.25 4.65.983 2.017 1.476 4.392 1.476 7.125 0 4.1-1.094 7.35-3.276 9.75-2.184 2.4-5.175 3.6-8.975 3.6-3.77 0-6.75-1.192-8.95-3.574zm13.723-4.026c1.116-1.4 1.675-3.316 1.675-5.75 0-2.433-.56-4.366-1.675-5.8-1.117-1.433-2.708-2.15-4.774-2.15-2.035 0-3.618.717-4.75 2.15-1.135 1.434-1.7 3.367-1.7 5.8 0 2.4.565 4.31 1.7 5.725 1.132 1.418 2.715 2.125 4.75 2.125 2.065 0 3.656-.7 4.773-2.1z',
    ],
  },
  block: {
    width: 200,
    height: 150,
    maskPaths: [
      'M99.958 144.88l19.65-42.1h5.9l-19.65 42.1h-5.9z',
      'M125.908 135.454c-2-2.35-3-5.642-3-9.875 0-2.734.467-5.102 1.4-7.102.933-2 2.24-3.54 3.925-4.625 1.683-1.082 3.607-1.625 5.774-1.625 1.367 0 2.6.226 3.7.676 1.1.45 1.983 1.042 2.65 1.774v-9.75l5.75-2.65v36.1h-5.75v-1.95c-.534.7-1.358 1.3-2.476 1.8s-2.357.75-3.724.75c-3.498 0-6.248-1.174-8.248-3.524zm12.325-2.6c.85-.416 1.558-1.04 2.125-1.875v-10.8c-.5-.7-1.2-1.292-2.1-1.775-.9-.483-2.034-.726-3.4-.726-1.968 0-3.483.683-4.55 2.05-1.067 1.366-1.6 3.316-1.6 5.85 0 2.4.54 4.317 1.624 5.75 1.083 1.434 2.625 2.15 4.625 2.15 1.334 0 2.426-.21 3.276-.626z',
      'M172.808 127.83h-17.4c.367 1.866 1.108 3.34 2.226 4.424 1.116 1.084 2.558 1.625 4.325 1.625 2.23 0 4.115-.834 5.65-2.5l3.448 3.65c-1.133 1.232-2.467 2.198-4 2.898s-3.25 1.05-5.15 1.05c-2.5 0-4.666-.55-6.5-1.65-1.833-1.1-3.24-2.657-4.225-4.674s-1.475-4.375-1.475-7.075c0-2.734.5-5.11 1.5-7.126s2.416-3.558 4.25-4.625c1.833-1.067 3.982-1.602 6.45-1.602 3.267 0 5.933 1.025 8 3.075 2.066 2.05 3.1 5.06 3.1 9.025 0 1.468-.068 2.635-.2 3.5zm-5.45-4.9c-.168-1.867-.76-3.275-1.775-4.226-1.018-.95-2.242-1.425-3.675-1.425-1.834 0-3.31.5-4.425 1.5-1.117 1-1.825 2.382-2.125 4.148h12z',
      'M180.808 137.754c-1.833-.816-3.3-1.925-4.4-3.325l3.75-3.4c.867.833 1.884 1.55 3.05 2.15 1.167.6 2.467.9 3.9.9 1.233 0 2.25-.218 3.05-.65.8-.434 1.2-1.084 1.2-1.95 0-.733-.392-1.35-1.175-1.85s-2.125-1.134-4.024-1.9l-1-.4c-2.035-.866-3.585-1.6-4.65-2.2-1.068-.6-1.935-1.375-2.6-2.325-.67-.95-1-2.142-1-3.575 0-2.166.932-3.875 2.8-5.125 1.865-1.25 4.215-1.875 7.05-1.875 2.065 0 3.9.367 5.5 1.1s2.95 1.718 4.05 2.95l-3.85 3.15c-.835-.7-1.7-1.258-2.602-1.675-.9-.416-2-.625-3.3-.625s-2.342.192-3.125.575c-.783.384-1.175.925-1.175 1.625 0 .634.458 1.208 1.375 1.725.916.518 2.342 1.16 4.275 1.925 2.1.834 3.69 1.534 4.774 2.1 1.083.568 2.025 1.368 2.825 2.4.8 1.034 1.2 2.35 1.2 3.95 0 2.367-.893 4.218-2.675 5.55-1.784 1.334-4.192 2-7.226 2-2.165 0-4.165-.41-5.998-1.226z',
      'M16.71 36.73c0 2.433-.392 4.407-1.175 5.925-.784 1.516-1.96 2.69-3.525 3.524-1.567.832-3.65 1.466-6.25 1.9l-2.9-4.602c2.1-.367 3.725-.792 4.875-1.274 1.15-.483 1.975-1.125 2.475-1.925.5-.802.75-1.852.75-3.15V16.88H3.91v-5.05h12.8v24.9zm-5.3-29.45c-.667-.668-1-1.484-1-2.45s.333-1.776 1-2.426c.666-.65 1.466-.976 2.4-.976.966 0 1.783.325 2.45.976.667.65 1 1.458 1 2.425s-.333 1.782-1 2.45c-.667.666-1.483 1-2.45 1-.934 0-1.734-.334-2.4-1z',
      'M24.385 35.78c-1.75-1.468-2.625-3.567-2.625-6.302 0-1.866.483-3.433 1.45-4.7.966-1.266 2.225-2.207 3.775-2.824 1.55-.616 3.208-.925 4.975-.925 2.433 0 4.55.45 6.35 1.35v-1.5c0-1.634-.425-2.81-1.275-3.525s-2.108-1.075-3.775-1.075c-1.4 0-2.792.225-4.175.675-1.384.45-2.692 1.092-3.925 1.925l-1.75-4.7c1.333-.866 2.908-1.574 4.725-2.125 1.816-.55 3.69-.824 5.625-.824 2.9 0 5.316.668 7.25 2 1.933 1.334 2.9 3.868 2.9 7.6v16.55h-5.6v-2c-1.8 1.734-4.167 2.6-7.1 2.6-2.8 0-5.075-.734-6.825-2.2zm13.925-5.4v-3.3c-1.533-.768-3.35-1.15-5.45-1.15-1.6 0-2.925.3-3.975.9-1.05.6-1.575 1.482-1.575 2.648 0 1.034.433 1.867 1.3 2.5.866.634 2.083.95 3.65.95 2.4 0 4.416-.85 6.05-2.55z',
      'M46.71 11.83h6.15l5.9 16.2c.365 1.132.615 2.05.75 2.75.165-.9.415-1.817.75-2.75l5.85-16.2h6.1l-9.95 25.55h-5.6l-9.95-25.55z',
      'M88.86 32.33h7.05v5.05H76.06v-5.05h7.05V16.88h-7.05v-5.05h12.8v20.5zm-5.3-25.05c-.667-.668-1-1.484-1-2.45s.333-1.776 1-2.426c.666-.65 1.466-.976 2.4-.976.966 0 1.783.325 2.45.976.667.65 1 1.458 1 2.425s-.333 1.782-1 2.45c-.667.666-1.483 1-2.45 1-.934 0-1.734-.334-2.4-1z',
      'M101.234 36.904c-.75-.75-1.125-1.676-1.125-2.775 0-1.067.374-1.983 1.124-2.75.75-.768 1.675-1.15 2.775-1.15 1.1 0 2.04.383 2.823 1.15.783.767 1.176 1.683 1.176 2.75 0 1.066-.386 1.982-1.15 2.75-.77.766-1.718 1.15-2.85 1.15-1.1 0-2.026-.376-2.776-1.126z',
      'M22.984 62.754c1.75 1.684 2.625 4.358 2.625 8.025v15.6h-5.75v-14.4c0-2.2-.484-3.802-1.45-4.802-.968-1-2.25-1.5-3.85-1.5-1.7 0-3.068.484-4.1 1.45-1.035.968-1.55 2.55-1.55 4.75v14.5H3.16v-25.55h5.3v3.15c.5-1 1.475-1.875 2.925-2.625 1.45-.75 3.042-1.125 4.775-1.125 2.8 0 5.074.843 6.824 2.526zM52.11 75.83h-17.4c.365 1.866 1.106 3.34 2.224 4.424 1.117 1.084 2.558 1.625 4.325 1.625 2.232 0 4.115-.834 5.65-2.5l3.45 3.65c-1.135 1.232-2.468 2.198-4 2.898-1.535.7-3.25 1.05-5.15 1.05-2.5 0-4.668-.55-6.5-1.65-1.835-1.1-3.243-2.657-4.226-4.674-.984-2.017-1.475-4.375-1.475-7.075 0-2.733.5-5.108 1.5-7.126 1-2.017 2.416-3.558 4.25-4.625 1.832-1.067 3.982-1.6 6.45-1.6 3.265 0 5.932 1.023 8 3.073 2.065 2.05 3.1 5.06 3.1 9.025 0 1.468-.068 2.635-.2 3.5zm-5.45-4.9c-.168-1.867-.76-3.275-1.776-4.226-1.017-.95-2.242-1.425-3.675-1.425-1.835 0-3.31.5-4.426 1.5-1.117 1-1.825 2.383-2.125 4.148h12zM62.36 91.83c2.432-.2 4.324-.51 5.674-.926 1.35-.418 2.308-1 2.875-1.75.565-.75.85-1.76.85-3.025v-1.5c-1.368 1.566-3.35 2.35-5.95 2.35-2.035 0-3.85-.51-5.45-1.525-1.6-1.017-2.86-2.533-3.776-4.55-.917-2.017-1.375-4.458-1.375-7.325 0-2.732.45-5.1 1.35-7.1s2.157-3.542 3.774-4.625c1.617-1.083 3.475-1.625 5.575-1.625 2.432 0 4.382.733 5.85 2.2v-1.6h5.75v22.85c0 2.932-.394 5.3-1.176 7.1-.784 1.8-2.05 3.157-3.8 4.074s-4.11 1.476-7.075 1.676l-3.1-4.7zm9.4-12.95V68.23c-.535-.734-1.218-1.343-2.05-1.826-.834-.483-1.8-.726-2.9-.726-1.9 0-3.35.676-4.35 2.025s-1.5 3.31-1.5 5.875c0 2.434.507 4.358 1.524 5.774 1.017 1.418 2.458 2.125 4.325 2.125 2.166.002 3.815-.865 4.95-2.598zM106.908 61.58v9.45h-5.6v-5.45h-.5c-2.633 0-4.667.616-6.1 1.85-1.434 1.233-2.15 3.083-2.15 5.55v8.35h7.15v5.05h-18.3v-5.05h5.4V65.88h-5.4v-5.05h10.75v4.1c.7-1.466 1.85-2.616 3.45-3.45 1.6-.832 3.366-1.25 5.3-1.25 2.3 0 4.3.45 6 1.35zM133.01 75.83h-17.4c.365 1.866 1.107 3.34 2.225 4.424 1.116 1.084 2.558 1.625 4.324 1.625 2.232 0 4.116-.834 5.65-2.5l3.45 3.65c-1.135 1.232-2.47 2.198-4 2.898-1.535.7-3.25 1.05-5.15 1.05-2.5 0-4.668-.55-6.5-1.65-1.834-1.1-3.242-2.657-4.226-4.674s-1.476-4.375-1.476-7.075c0-2.733.5-5.108 1.5-7.126 1-2.017 2.417-3.558 4.25-4.625 1.834-1.067 3.983-1.6 6.45-1.6 3.267 0 5.933 1.023 8 3.073s3.1 5.06 3.1 9.025c0 1.468-.066 2.635-.2 3.5zm-5.45-4.9c-.168-1.867-.76-3.275-1.776-4.226-1.017-.95-2.242-1.425-3.674-1.425-1.834 0-3.31.5-4.426 1.5s-1.824 2.383-2.125 4.148h12zM137.033 85.904c-.75-.75-1.125-1.676-1.125-2.775 0-1.067.375-1.983 1.125-2.75.75-.768 1.676-1.15 2.775-1.15s2.04.383 2.824 1.15c.783.767 1.176 1.683 1.176 2.75 0 1.066-.384 1.982-1.15 2.75-.768.766-1.717 1.15-2.85 1.15-1.1 0-2.025-.376-2.775-1.126zM150.108 83.43c-2.1-2.367-3.15-5.634-3.15-9.8 0-2.733.483-5.108 1.45-7.126.967-2.017 2.342-3.566 4.125-4.65s3.857-1.624 6.225-1.624c5.434 0 8.934 2.316 10.5 6.95l-5.45 1.85c-.866-2.233-2.532-3.35-5-3.35-1.9 0-3.374.717-4.425 2.15-1.05 1.433-1.574 3.366-1.574 5.8 0 2.433.524 4.35 1.573 5.75 1.05 1.4 2.492 2.1 4.326 2.1 2.665 0 4.415-1.25 5.25-3.75l5.448 1.7c-1.533 5.033-5.117 7.55-10.75 7.55-3.6 0-6.45-1.184-8.55-3.55zM175.51 83.404c-2.2-2.383-3.3-5.642-3.3-9.775 0-2.7.5-5.06 1.5-7.076s2.415-3.574 4.25-4.675c1.83-1.1 4-1.65 6.5-1.65s4.674.542 6.523 1.625c1.85 1.083 3.267 2.633 4.25 4.65.983 2.017 1.476 4.392 1.476 7.124 0 4.1-1.094 7.35-3.276 9.75-2.184 2.4-5.175 3.6-8.975 3.6-3.77 0-6.75-1.193-8.95-3.576zm13.723-4.025c1.116-1.4 1.675-3.317 1.675-5.75 0-2.434-.56-4.367-1.675-5.8-1.117-1.434-2.708-2.15-4.774-2.15-2.035 0-3.618.717-4.75 2.15-1.135 1.433-1.7 3.366-1.7 5.8 0 2.4.565 4.308 1.7 5.724 1.132 1.418 2.715 2.125 4.75 2.125 2.065 0 3.656-.7 4.773-2.1z',
    ],
  },
};

const reds = ['red', 'salmon', 'crimson', 'orangered', 'gold', 'darkred'];
const greens = ['green', 'olivedrab', 'yellowgreen', 'seagreen', 'springgreen', 'lime'];
const blues = ['blue', 'darkturquoise', 'teal', 'navy', 'aquamarine', 'lightskyblue'];

export default {
  defaultBgColor,
  svg,
  reds,
  greens,
  blues,
};