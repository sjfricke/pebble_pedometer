/*
 * pebble pedometer
 * @author jathusant
 */

#include <pebble.h>
#include "src/c/run.h"

int main(void) {
    handle_init();
    // Initialize AppMessage inbox and outbox buffers with a suitable size
    const int inbox_size = 128;
    const int outbox_size = 128;
    app_message_open(inbox_size, outbox_size);
    app_event_loop();
    handle_deinit();
}