#!/usr/bin/env python

import json
from serpent import mk_full_signature

contracts = {
    'LNCHdex': '../contracts/LNCHdex.se',
    'sub': '../contracts/lnch.se'
}

for c in contracts:
    sig = mk_full_signature(contracts[c])
    # print sig

    abi = json.dumps(sig, indent=4, separators=(',', ': '))
    # print abi

    with open('app/js/abi/%s.js' % c, 'w') as out:
        out.write("module.exports = %s;\n" % abi)
