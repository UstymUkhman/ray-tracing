(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $none_=>_none (func))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_f64 (func (param i32) (result f64)))
 (type $i32_i32_f64_f64_i32_=>_i32 (func (param i32 i32 f64 f64 i32) (result i32)))
 (type $i32_i32_=>_f64 (func (param i32 i32) (result f64)))
 (type $i32_f64_=>_i32 (func (param i32 f64) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_i64_=>_none (func (param i32 i32 i64)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_=>_f32 (func (param i32 i32) (result f32)))
 (type $i32_i32_f64_=>_none (func (param i32 i32 f64)))
 (type $i32_f64_f64_f64_=>_i32 (func (param i32 f64 f64 f64) (result i32)))
 (type $f64_f64_f64_=>_i32 (func (param f64 f64 f64) (result i32)))
 (type $f64_=>_i32 (func (param f64) (result i32)))
 (type $i32_f64_i32_=>_none (func (param i32 f64 i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_f32_=>_none (func (param i32 i32 f32)))
 (type $f64_i32_i32_=>_i32 (func (param f64 i32 i32) (result i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (global $~lib/rt/itcms/total (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/threshold (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/state (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/visitCount (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/iter (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/itcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $assembly/hittables/index/IRecord (mut i32) (i32.const 0))
 (global $assembly/Tracer/tracer (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 1984))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 34832))
 (memory $0 1)
 (data $0 (i32.const 1036) "<")
 (data $0.1 (i32.const 1048) "\02\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data $1 (i32.const 1100) "<")
 (data $1.1 (i32.const 1112) "\02\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s")
 (data $2 (i32.const 1164) "<")
 (data $2.1 (i32.const 1176) "\02\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s")
 (data $3 (i32.const 1228) "\1c")
 (data $3.1 (i32.const 1240) "\08\00\00\00\08\00\00\00\01")
 (data $4 (i32.const 1260) "<")
 (data $4.1 (i32.const 1272) "\02\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data $5 (i32.const 1324) "<")
 (data $5.1 (i32.const 1336) "\02\00\00\00 \00\00\00~\00l\00i\00b\00/\00r\00t\00/\00i\00t\00c\00m\00s\00.\00t\00s")
 (data $8 (i32.const 1452) ",")
 (data $8.1 (i32.const 1464) "\02\00\00\00\14\00\00\00~\00l\00i\00b\00/\00r\00t\00.\00t\00s")
 (data $10 (i32.const 1532) "<")
 (data $10.1 (i32.const 1544) "\02\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data $11 (i32.const 1596) ",")
 (data $11.1 (i32.const 1608) "\02\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data $12 (i32.const 1644) ",")
 (data $12.1 (i32.const 1656) "\02\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data $13 (i32.const 1692) "\1c")
 (data $13.1 (i32.const 1704) "\01")
 (data $14 (i32.const 1724) "<")
 (data $14.1 (i32.const 1736) "\02\00\00\00*\00\00\00O\00b\00j\00e\00c\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00p\00i\00n\00n\00e\00d")
 (data $15 (i32.const 1788) "<")
 (data $15.1 (i32.const 1800) "\02\00\00\00(\00\00\00O\00b\00j\00e\00c\00t\00 \00i\00s\00 \00n\00o\00t\00 \00p\00i\00n\00n\00e\00d")
 (data $16 (i32.const 1852) "|")
 (data $16.1 (i32.const 1864) "\02\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y")
 (data $17 (i32.const 1984) "\13\00\00\00 \00\00\00 \00\00\00 \00\00\00\00\00\00\00A\00\00\00\01\19\00\00\00\00\00\00$\1a")
 (data $17.1 (i32.const 2044) " \00\00\00\02A\00\00\00\00\00\00\02\t")
 (table $0 2 2 funcref)
 (elem $0 (i32.const 1) $start:assembly/utils/Color~anonymous|0)
 (export "__new" (func $~lib/rt/itcms/__new))
 (export "__pin" (func $~lib/rt/itcms/__pin))
 (export "__unpin" (func $~lib/rt/itcms/__unpin))
 (export "__collect" (func $~lib/rt/itcms/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (export "trace" (func $export:assembly/Tracer/trace))
 (start $~start)
 (func $~lib/rt/itcms/visitRoots
  (local $0 i32)
  (local $1 i32)
  i32.const 1056
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1616
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1872
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1280
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1744
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  i32.const 1808
  call $byn-split-outlined-A$~lib/rt/itcms/__visit
  global.get $assembly/Tracer/tracer
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $assembly/hittables/index/IRecord
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
  global.get $~lib/rt/itcms/pinSpace
  local.tee $1
  i32.load $0 offset=4
  i32.const -4
  i32.and
  local.set $0
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $0
    i32.load $0 offset=4
    i32.const 3
    i32.and
    i32.const 3
    i32.ne
    if
     i32.const 0
     i32.const 1344
     i32.const 160
     i32.const 16
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $0
    i32.load $0 offset=4
    i32.const -4
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
 )
 (func $~lib/rt/itcms/Object#unlink (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load $0 offset=4
  i32.const -4
  i32.and
  local.tee $1
  i32.eqz
  if
   local.get $0
   i32.load $0 offset=8
   i32.eqz
   local.get $0
   i32.const 34832
   i32.lt_u
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1344
    i32.const 128
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   return
  end
  local.get $0
  i32.load $0 offset=8
  local.tee $0
  i32.eqz
  if
   i32.const 0
   i32.const 1344
   i32.const 132
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.store $0 offset=8
  local.get $0
  local.get $1
  local.get $0
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store $0 offset=4
 )
 (func $~lib/rt/itcms/Object#makeGray (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  global.get $~lib/rt/itcms/iter
  i32.eq
  if
   local.get $0
   i32.load $0 offset=8
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1344
    i32.const 148
    i32.const 30
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   global.set $~lib/rt/itcms/iter
  end
  local.get $0
  call $~lib/rt/itcms/Object#unlink
  global.get $~lib/rt/itcms/toSpace
  local.set $1
  local.get $0
  i32.load $0 offset=12
  local.tee $2
  i32.const 2
  i32.le_u
  if (result i32)
   i32.const 1
  else
   local.get $2
   i32.const 1984
   i32.load $0
   i32.gt_u
   if
    i32.const 1056
    i32.const 1472
    i32.const 21
    i32.const 28
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   i32.const 2
   i32.shl
   i32.const 1988
   i32.add
   i32.load $0
   i32.const 32
   i32.and
  end
  local.set $3
  local.get $1
  i32.load $0 offset=8
  local.set $2
  local.get $0
  global.get $~lib/rt/itcms/white
  i32.eqz
  i32.const 2
  local.get $3
  select
  local.get $1
  i32.or
  i32.store $0 offset=4
  local.get $0
  local.get $2
  i32.store $0 offset=8
  local.get $2
  local.get $0
  local.get $2
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store $0 offset=4
  local.get $1
  local.get $0
  i32.store $0 offset=8
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load $0
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1552
   i32.const 268
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1552
   i32.const 270
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $2
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   i32.const 1073741820
   local.get $2
   local.get $2
   i32.const 1073741820
   i32.ge_u
   select
   local.tee $2
   i32.clz
   i32.sub
   local.tee $4
   i32.const 7
   i32.sub
   local.set $3
   local.get $2
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $2
  i32.const 16
  i32.lt_u
  local.get $3
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1552
   i32.const 284
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load $0 offset=8
  local.set $5
  local.get $1
  i32.load $0 offset=4
  local.tee $4
  if
   local.get $4
   local.get $5
   i32.store $0 offset=8
  end
  local.get $5
  if
   local.get $5
   local.get $4
   i32.store $0 offset=4
  end
  local.get $1
  local.get $0
  local.get $3
  i32.const 4
  i32.shl
  local.get $2
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load $0 offset=96
  i32.eq
  if
   local.get $0
   local.get $3
   i32.const 4
   i32.shl
   local.get $2
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $5
   i32.store $0 offset=96
   local.get $5
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $1
    i32.load $0 offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $2
    local.get $1
    local.get $2
    i32.store $0 offset=4
    local.get $2
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load $0
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store $0
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1552
   i32.const 201
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load $0
  local.tee $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1552
   i32.const 203
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load $0
  i32.const -4
  i32.and
  i32.add
  local.tee $4
  i32.load $0
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $3
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store $0
   local.get $1
   i32.const 4
   i32.add
   local.get $1
   i32.load $0
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load $0
   local.set $2
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load $0
   local.tee $1
   i32.load $0
   local.tee $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1552
    i32.const 221
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/removeBlock
   local.get $1
   local.get $6
   i32.const 4
   i32.add
   local.get $3
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.store $0
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.or
  i32.store $0
  local.get $3
  i32.const -4
  i32.and
  local.tee $2
  i32.const 12
  i32.lt_u
  if
   i32.const 0
   i32.const 1552
   i32.const 233
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  local.get $1
  i32.const 4
  i32.add
  local.get $2
  i32.add
  i32.ne
  if
   i32.const 0
   i32.const 1552
   i32.const 234
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store $0
  local.get $2
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $2
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   i32.const 1073741820
   local.get $2
   local.get $2
   i32.const 1073741820
   i32.ge_u
   select
   local.tee $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 7
   i32.sub
   local.set $5
   local.get $2
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $2
  i32.const 16
  i32.lt_u
  local.get $5
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1552
   i32.const 251
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $5
  i32.const 4
  i32.shl
  local.get $2
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load $0 offset=96
  local.set $3
  local.get $1
  i32.const 0
  i32.store $0 offset=4
  local.get $1
  local.get $3
  i32.store $0 offset=8
  local.get $3
  if
   local.get $3
   local.get $1
   i32.store $0 offset=4
  end
  local.get $0
  local.get $5
  i32.const 4
  i32.shl
  local.get $2
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store $0 offset=96
  local.get $0
  local.get $0
  i32.load $0
  i32.const 1
  local.get $5
  i32.shl
  i32.or
  i32.store $0
  local.get $0
  local.get $5
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load $0 offset=4
  i32.const 1
  local.get $2
  i32.shl
  i32.or
  i32.store $0 offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i32)
  (local $4 i32)
  local.get $2
  local.get $1
  i64.extend_i32_u
  i64.lt_u
  if
   i32.const 0
   i32.const 1552
   i32.const 382
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.load $0 offset=1568
  local.tee $4
  if
   local.get $4
   i32.const 4
   i32.add
   local.get $1
   i32.gt_u
   if
    i32.const 0
    i32.const 1552
    i32.const 389
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 16
   i32.sub
   local.get $4
   i32.eq
   if
    local.get $4
    i32.load $0
    local.set $3
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $0
   i32.const 1572
   i32.add
   local.get $1
   i32.gt_u
   if
    i32.const 0
    i32.const 1552
    i32.const 402
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  i32.wrap_i64
  i32.const -16
  i32.and
  local.get $1
  i32.sub
  local.tee $4
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $3
  i32.const 2
  i32.and
  local.get $4
  i32.const 8
  i32.sub
  local.tee $3
  i32.const 1
  i32.or
  i32.or
  i32.store $0
  local.get $1
  i32.const 0
  i32.store $0 offset=4
  local.get $1
  i32.const 0
  i32.store $0 offset=8
  local.get $1
  i32.const 4
  i32.add
  local.get $3
  i32.add
  local.tee $3
  i32.const 2
  i32.store $0
  local.get $0
  local.get $3
  i32.store $0 offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size $0
  local.tee $1
  i32.const 0
  i32.le_s
  if (result i32)
   i32.const 1
   local.get $1
   i32.sub
   memory.grow $0
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 34832
  i32.const 0
  i32.store $0
  i32.const 36400
  i32.const 0
  i32.store $0
  loop $for-loop|0
   local.get $0
   i32.const 23
   i32.lt_u
   if
    local.get $0
    i32.const 2
    i32.shl
    i32.const 34832
    i32.add
    i32.const 0
    i32.store $0 offset=4
    i32.const 0
    local.set $1
    loop $for-loop|1
     local.get $1
     i32.const 16
     i32.lt_u
     if
      local.get $0
      i32.const 4
      i32.shl
      local.get $1
      i32.add
      i32.const 2
      i32.shl
      i32.const 34832
      i32.add
      i32.const 0
      i32.store $0 offset=96
      local.get $1
      i32.const 1
      i32.add
      local.set $1
      br $for-loop|1
     end
    end
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  i32.const 34832
  i32.const 36404
  memory.size $0
  i64.extend_i32_s
  i64.const 16
  i64.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 34832
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/itcms/step (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  block $break|0
   block $case2|0
    block $case1|0
     block $case0|0
      global.get $~lib/rt/itcms/state
      br_table $case0|0 $case1|0 $case2|0 $break|0
     end
     i32.const 1
     global.set $~lib/rt/itcms/state
     i32.const 0
     global.set $~lib/rt/itcms/visitCount
     call $~lib/rt/itcms/visitRoots
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/iter
     global.get $~lib/rt/itcms/visitCount
     return
    end
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.set $1
    global.get $~lib/rt/itcms/iter
    i32.load $0 offset=4
    i32.const -4
    i32.and
    local.set $0
    loop $while-continue|1
     local.get $0
     global.get $~lib/rt/itcms/toSpace
     i32.ne
     if
      local.get $0
      global.set $~lib/rt/itcms/iter
      local.get $1
      local.get $0
      i32.load $0 offset=4
      i32.const 3
      i32.and
      i32.ne
      if
       local.get $0
       local.get $0
       i32.load $0 offset=4
       i32.const -4
       i32.and
       local.get $1
       i32.or
       i32.store $0 offset=4
       i32.const 0
       global.set $~lib/rt/itcms/visitCount
       local.get $0
       i32.const 20
       i32.add
       call $~lib/rt/__visit_members
       global.get $~lib/rt/itcms/visitCount
       return
      end
      local.get $0
      i32.load $0 offset=4
      i32.const -4
      i32.and
      local.set $0
      br $while-continue|1
     end
    end
    i32.const 0
    global.set $~lib/rt/itcms/visitCount
    call $~lib/rt/itcms/visitRoots
    global.get $~lib/rt/itcms/toSpace
    global.get $~lib/rt/itcms/iter
    i32.load $0 offset=4
    i32.const -4
    i32.and
    i32.eq
    if
     global.get $~lib/memory/__stack_pointer
     local.set $0
     loop $while-continue|0
      local.get $0
      i32.const 34832
      i32.lt_u
      if
       local.get $0
       i32.load $0
       local.tee $2
       if
        local.get $2
        call $byn-split-outlined-A$~lib/rt/itcms/__visit
       end
       local.get $0
       i32.const 4
       i32.add
       local.set $0
       br $while-continue|0
      end
     end
     global.get $~lib/rt/itcms/iter
     i32.load $0 offset=4
     i32.const -4
     i32.and
     local.set $0
     loop $while-continue|2
      local.get $0
      global.get $~lib/rt/itcms/toSpace
      i32.ne
      if
       local.get $1
       local.get $0
       i32.load $0 offset=4
       i32.const 3
       i32.and
       i32.ne
       if
        local.get $0
        local.get $0
        i32.load $0 offset=4
        i32.const -4
        i32.and
        local.get $1
        i32.or
        i32.store $0 offset=4
        local.get $0
        i32.const 20
        i32.add
        call $~lib/rt/__visit_members
       end
       local.get $0
       i32.load $0 offset=4
       i32.const -4
       i32.and
       local.set $0
       br $while-continue|2
      end
     end
     global.get $~lib/rt/itcms/fromSpace
     local.set $0
     global.get $~lib/rt/itcms/toSpace
     global.set $~lib/rt/itcms/fromSpace
     local.get $0
     global.set $~lib/rt/itcms/toSpace
     local.get $1
     global.set $~lib/rt/itcms/white
     local.get $0
     i32.load $0 offset=4
     i32.const -4
     i32.and
     global.set $~lib/rt/itcms/iter
     i32.const 2
     global.set $~lib/rt/itcms/state
    end
    global.get $~lib/rt/itcms/visitCount
    return
   end
   global.get $~lib/rt/itcms/iter
   local.tee $0
   global.get $~lib/rt/itcms/toSpace
   i32.ne
   if
    local.get $0
    i32.load $0 offset=4
    local.tee $1
    i32.const -4
    i32.and
    global.set $~lib/rt/itcms/iter
    global.get $~lib/rt/itcms/white
    i32.eqz
    local.get $1
    i32.const 3
    i32.and
    i32.ne
    if
     i32.const 0
     i32.const 1344
     i32.const 229
     i32.const 20
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    i32.const 34832
    i32.lt_u
    if
     local.get $0
     i32.const 0
     i32.store $0 offset=4
     local.get $0
     i32.const 0
     i32.store $0 offset=8
    else
     global.get $~lib/rt/itcms/total
     local.get $0
     i32.load $0
     i32.const -4
     i32.and
     i32.const 4
     i32.add
     i32.sub
     global.set $~lib/rt/itcms/total
     local.get $0
     i32.const 4
     i32.add
     local.tee $0
     i32.const 34832
     i32.ge_u
     if
      global.get $~lib/rt/tlsf/ROOT
      i32.eqz
      if
       call $~lib/rt/tlsf/initialize
      end
      global.get $~lib/rt/tlsf/ROOT
      local.set $1
      local.get $0
      i32.const 4
      i32.sub
      local.set $2
      local.get $0
      i32.const 15
      i32.and
      i32.const 1
      local.get $0
      select
      if (result i32)
       i32.const 1
      else
       local.get $2
       i32.load $0
       i32.const 1
       i32.and
      end
      if
       i32.const 0
       i32.const 1552
       i32.const 562
       i32.const 3
       call $~lib/builtins/abort
       unreachable
      end
      local.get $2
      local.get $2
      i32.load $0
      i32.const 1
      i32.or
      i32.store $0
      local.get $1
      local.get $2
      call $~lib/rt/tlsf/insertBlock
     end
    end
    i32.const 10
    return
   end
   global.get $~lib/rt/itcms/toSpace
   local.tee $0
   local.get $0
   i32.store $0 offset=4
   local.get $0
   local.get $0
   i32.store $0 offset=8
   i32.const 0
   global.set $~lib/rt/itcms/state
  end
  i32.const 0
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $1
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870910
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.tee $3
   i32.const 7
   i32.sub
   local.set $2
   local.get $1
   local.get $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.tee $1
  i32.const 16
  i32.lt_u
  local.get $2
  i32.const 23
  i32.lt_u
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1552
   i32.const 334
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load $0 offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load $0 offset=96
  else
   local.get $0
   i32.load $0
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load $0 offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1552
     i32.const 347
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load $0 offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/itcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 1073741804
  i32.ge_u
  if
   i32.const 1280
   i32.const 1344
   i32.const 261
   i32.const 31
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/total
  global.get $~lib/rt/itcms/threshold
  i32.ge_u
  if
   block $__inlined_func$~lib/rt/itcms/interrupt
    i32.const 2048
    local.set $2
    loop $do-loop|0
     local.get $2
     call $~lib/rt/itcms/step
     i32.sub
     local.set $2
     global.get $~lib/rt/itcms/state
     i32.eqz
     if
      global.get $~lib/rt/itcms/total
      i64.extend_i32_u
      i64.const 200
      i64.mul
      i64.const 100
      i64.div_u
      i32.wrap_i64
      i32.const 1024
      i32.add
      global.set $~lib/rt/itcms/threshold
      br $__inlined_func$~lib/rt/itcms/interrupt
     end
     local.get $2
     i32.const 0
     i32.gt_s
     br_if $do-loop|0
    end
    global.get $~lib/rt/itcms/total
    local.tee $2
    local.get $2
    global.get $~lib/rt/itcms/threshold
    i32.sub
    i32.const 1024
    i32.lt_u
    i32.const 10
    i32.shl
    i32.add
    global.set $~lib/rt/itcms/threshold
   end
  end
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.set $4
  local.get $0
  i32.const 16
  i32.add
  local.tee $2
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1280
   i32.const 1552
   i32.const 461
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 12
  local.get $2
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $2
  i32.const 12
  i32.le_u
  select
  local.tee $5
  call $~lib/rt/tlsf/searchBlock
  local.tee $2
  i32.eqz
  if
   memory.size $0
   local.tee $2
   local.get $5
   i32.const 256
   i32.ge_u
   if (result i32)
    local.get $5
    i32.const 1
    i32.const 27
    local.get $5
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
    local.get $5
    local.get $5
    i32.const 536870910
    i32.lt_u
    select
   else
    local.get $5
   end
   i32.const 4
   local.get $4
   i32.load $0 offset=1568
   local.get $2
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   i32.ne
   i32.shl
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.tee $3
   local.get $2
   local.get $3
   i32.gt_s
   select
   memory.grow $0
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow $0
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $4
   local.get $2
   i32.const 16
   i32.shl
   memory.size $0
   i64.extend_i32_s
   i64.const 16
   i64.shl
   call $~lib/rt/tlsf/addMemory
   local.get $4
   local.get $5
   call $~lib/rt/tlsf/searchBlock
   local.tee $2
   i32.eqz
   if
    i32.const 0
    i32.const 1552
    i32.const 499
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $5
  local.get $2
  i32.load $0
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1552
   i32.const 501
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  local.get $2
  call $~lib/rt/tlsf/removeBlock
  local.get $2
  i32.load $0
  local.set $3
  local.get $5
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1552
   i32.const 361
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $5
  i32.sub
  local.tee $6
  i32.const 16
  i32.ge_u
  if
   local.get $2
   local.get $5
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store $0
   local.get $2
   i32.const 4
   i32.add
   local.get $5
   i32.add
   local.tee $3
   local.get $6
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store $0
   local.get $4
   local.get $3
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $2
   local.get $3
   i32.const -2
   i32.and
   i32.store $0
   local.get $2
   i32.const 4
   i32.add
   local.get $2
   i32.load $0
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   local.get $3
   i32.load $0
   i32.const -3
   i32.and
   i32.store $0
  end
  local.get $2
  local.get $1
  i32.store $0 offset=12
  local.get $2
  local.get $0
  i32.store $0 offset=16
  global.get $~lib/rt/itcms/fromSpace
  local.tee $1
  i32.load $0 offset=8
  local.set $3
  local.get $2
  local.get $1
  global.get $~lib/rt/itcms/white
  i32.or
  i32.store $0 offset=4
  local.get $2
  local.get $3
  i32.store $0 offset=8
  local.get $3
  local.get $2
  local.get $3
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store $0 offset=4
  local.get $1
  local.get $2
  i32.store $0 offset=8
  global.get $~lib/rt/itcms/total
  local.get $2
  i32.load $0
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/itcms/total
  local.get $2
  i32.const 20
  i32.add
  local.tee $1
  i32.const 0
  local.get $0
  memory.fill $0
  local.get $1
 )
 (func $start:assembly/Tracer
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  memory.size $0
  i32.const 16
  i32.shl
  i32.const 34832
  i32.sub
  i32.const 1
  i32.shr_u
  global.set $~lib/rt/itcms/threshold
  i32.const 1396
  i32.const 1392
  i32.store $0
  i32.const 1400
  i32.const 1392
  i32.store $0
  i32.const 1392
  global.set $~lib/rt/itcms/pinSpace
  i32.const 1428
  i32.const 1424
  i32.store $0
  i32.const 1432
  i32.const 1424
  i32.store $0
  i32.const 1424
  global.set $~lib/rt/itcms/toSpace
  i32.const 1508
  i32.const 1504
  i32.store $0
  i32.const 1512
  i32.const 1504
  i32.store $0
  i32.const 1504
  global.set $~lib/rt/itcms/fromSpace
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.ge_s
  if
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i64.const 0
   i64.store $0
   local.get $0
   i32.const 0
   i32.store $0 offset=8
   local.get $0
   i32.const 20
   i32.const 9
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   local.tee $1
   local.get $0
   i32.store $0 offset=4
   local.get $1
   local.get $0
   call $~lib/object/Object#constructor
   local.tee $0
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store $0 offset=4
   local.get $0
   f64.const 0
   f64.store $0
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store $0 offset=4
   local.get $0
   i32.const 0
   i32.store8 $0 offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store $0 offset=4
   i32.const 0
   global.set $~argumentsLength
   f64.const 0
   call $assembly/utils/Vector3/Vector3#constructor@varargs
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store $0 offset=8
   local.get $0
   local.get $1
   i32.store $0 offset=12
   local.get $1
   if
    local.get $0
    local.get $1
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   local.get $0
   i32.store $0 offset=4
   i32.const 0
   global.set $~argumentsLength
   f64.const 0
   call $assembly/utils/Vector3/Vector3#constructor@varargs
   local.set $1
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store $0 offset=8
   local.get $0
   local.get $1
   i32.store $0 offset=16
   local.get $1
   if
    local.get $0
    local.get $1
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   global.set $assembly/hittables/index/IRecord
   global.get $~lib/memory/__stack_pointer
   i32.const 24
   i32.sub
   global.set $~lib/memory/__stack_pointer
   block $folding-inner0
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    i32.const 0
    i32.const 24
    memory.fill $0
    local.get $0
    i32.const 26
    i32.const 10
    call $~lib/rt/itcms/__new
    local.tee $1
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0 offset=4
    local.get $1
    i32.const 0
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    local.get $1
    i32.store $0 offset=4
    local.get $0
    i32.const 12
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    i64.const 0
    i64.store $0
    local.get $0
    i32.const 0
    i32.store $0 offset=8
    local.get $0
    i32.const 4
    i32.const 12
    call $~lib/rt/itcms/__new
    local.tee $2
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    local.get $2
    i32.store $0 offset=4
    local.get $0
    i32.const 12
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    i64.const 0
    i64.store $0
    local.get $0
    i32.const 0
    i32.store $0 offset=8
    local.get $0
    i32.const 4
    i32.const 13
    call $~lib/rt/itcms/__new
    local.tee $4
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    local.get $4
    i32.store $0 offset=4
    local.get $0
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    i32.const 0
    i32.store $0
    i32.const 0
    i32.const 1
    call $~lib/rt/itcms/__new
    local.tee $5
    i32.const 1712
    i32.const 0
    memory.copy $0 $0
    local.get $0
    local.get $5
    i32.store $0
    i32.const 16
    i32.const 15
    call $~lib/rt/itcms/__new
    local.tee $3
    local.get $5
    i32.store $0
    local.get $5
    if
     local.get $3
     i32.eqz
     if
      i32.const 0
      i32.const 1344
      i32.const 295
      i32.const 14
      call $~lib/builtins/abort
      unreachable
     end
     global.get $~lib/rt/itcms/white
     local.get $5
     i32.const 20
     i32.sub
     local.tee $6
     i32.load $0 offset=4
     i32.const 3
     i32.and
     i32.eq
     if
      local.get $3
      i32.const 20
      i32.sub
      i32.load $0 offset=4
      i32.const 3
      i32.and
      local.tee $0
      global.get $~lib/rt/itcms/white
      i32.eqz
      i32.eq
      if
       local.get $6
       call $~lib/rt/itcms/Object#makeGray
      else
       global.get $~lib/rt/itcms/state
       i32.const 1
       i32.eq
       local.get $0
       i32.const 3
       i32.eq
       i32.and
       if
        local.get $6
        call $~lib/rt/itcms/Object#makeGray
       end
      end
     end
    end
    local.get $3
    local.get $5
    i32.store $0 offset=4
    local.get $3
    i32.const 0
    i32.store $0 offset=8
    local.get $3
    i32.const 0
    i32.store $0 offset=12
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    local.get $3
    i32.store $0 offset=8
    local.get $4
    local.get $3
    i32.store $0
    local.get $3
    if
     local.get $4
     local.get $3
     i32.const 0
     call $byn-split-outlined-A$~lib/rt/itcms/__link
    end
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    local.get $4
    i32.store $0 offset=4
    local.get $0
    local.get $4
    call $assembly/hittables/Hittable/Hittable#constructor
    local.tee $0
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=8
    local.get $2
    local.get $0
    i32.store $0
    local.get $0
    if
     local.get $2
     local.get $0
     i32.const 0
     call $byn-split-outlined-A$~lib/rt/itcms/__link
    end
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store $0 offset=4
    f64.const 0
    f64.const 0
    f64.const -1
    call $assembly/utils/Vector3/Vector3#constructor
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=8
    local.get $2
    f64.const 0.5
    local.get $0
    call $assembly/hittables/World/World#addSphere
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store $0 offset=4
    f64.const 0
    f64.const -100.5
    f64.const -1
    call $assembly/utils/Vector3/Vector3#constructor
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=8
    local.get $2
    f64.const 100
    local.get $0
    call $assembly/hittables/World/World#addSphere
    global.get $~lib/memory/__stack_pointer
    i32.const 12
    i32.add
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store $0 offset=8
    local.get $1
    local.get $2
    i32.store $0 offset=4
    local.get $2
    if
     local.get $1
     local.get $2
     i32.const 0
     call $byn-split-outlined-A$~lib/rt/itcms/__link
    end
    global.get $~lib/memory/__stack_pointer
    local.tee $0
    local.get $1
    i32.store $0 offset=4
    local.get $1
    f64.const 400
    f64.store $0 offset=8
    local.get $0
    local.get $1
    i32.store $0 offset=4
    local.get $1
    f64.const 225
    f64.store $0 offset=16
    local.get $0
    local.get $1
    i32.store $0 offset=4
    local.get $1
    i32.const 500
    i32.store16 $0 offset=24
    local.get $0
    local.get $1
    i32.store $0 offset=4
    i32.const 0
    global.set $~argumentsLength
    f64.const 0
    call $assembly/utils/Vector3/Vector3#constructor@varargs
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=12
    f64.const 0
    f64.const 0
    f64.const 0
    call $assembly/utils/Vector3/Vector3#constructor
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store $0 offset=16
    f64.const 0
    f64.const 1
    f64.const 0
    call $assembly/utils/Vector3/Vector3#constructor
    local.set $2
    global.get $~lib/memory/__stack_pointer
    local.get $2
    i32.store $0 offset=20
    local.get $0
    call $assembly/Camera/Camera#constructor
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=8
    local.get $1
    local.get $0
    i32.store $0
    local.get $0
    if
     local.get $1
     local.get $0
     i32.const 0
     call $byn-split-outlined-A$~lib/rt/itcms/__link
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 24
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $1
    global.set $assembly/Tracer/tracer
    return
   end
  end
  i32.const 34864
  i32.const 34912
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/rt/itcms/__pin (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load $0 offset=4
   i32.const 3
   i32.and
   i32.const 3
   i32.eq
   if
    i32.const 1744
    i32.const 1344
    i32.const 338
    i32.const 7
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/pinSpace
   local.tee $3
   i32.load $0 offset=8
   local.set $2
   local.get $1
   local.get $3
   i32.const 3
   i32.or
   i32.store $0 offset=4
   local.get $1
   local.get $2
   i32.store $0 offset=8
   local.get $2
   local.get $1
   local.get $2
   i32.load $0 offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store $0 offset=4
   local.get $3
   local.get $1
   i32.store $0 offset=8
  end
  local.get $0
 )
 (func $~lib/rt/itcms/__unpin (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  local.tee $1
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.const 3
  i32.ne
  if
   i32.const 1808
   i32.const 1344
   i32.const 352
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/state
  i32.const 1
  i32.eq
  if
   local.get $1
   call $~lib/rt/itcms/Object#makeGray
  else
   local.get $1
   call $~lib/rt/itcms/Object#unlink
   global.get $~lib/rt/itcms/fromSpace
   local.tee $0
   i32.load $0 offset=8
   local.set $2
   local.get $1
   local.get $0
   global.get $~lib/rt/itcms/white
   i32.or
   i32.store $0 offset=4
   local.get $1
   local.get $2
   i32.store $0 offset=8
   local.get $2
   local.get $1
   local.get $2
   i32.load $0 offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store $0 offset=4
   local.get $0
   local.get $1
   i32.store $0 offset=8
  end
 )
 (func $~lib/rt/itcms/__collect
  global.get $~lib/rt/itcms/state
  i32.const 0
  i32.gt_s
  if
   loop $while-continue|0
    global.get $~lib/rt/itcms/state
    if
     call $~lib/rt/itcms/step
     drop
     br $while-continue|0
    end
   end
  end
  call $~lib/rt/itcms/step
  drop
  loop $while-continue|1
   global.get $~lib/rt/itcms/state
   if
    call $~lib/rt/itcms/step
    drop
    br $while-continue|1
   end
  end
  global.get $~lib/rt/itcms/total
  i64.extend_i32_u
  i64.const 200
  i64.mul
  i64.const 100
  i64.div_u
  i32.wrap_i64
  i32.const 1024
  i32.add
  global.set $~lib/rt/itcms/threshold
 )
 (func $assembly/hittables/Hittable/Hittable#hit@override (param $0 i32) (param $1 i32) (param $2 f64) (param $3 f64) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  block $folding-inner0
   block $default
    block $case1
     local.get $0
     i32.const 8
     i32.sub
     i32.load $0
     local.tee $5
     i32.const 13
     i32.ne
     if
      local.get $5
      i32.const 16
      i32.eq
      br_if $case1
      br $default
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 20
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2064
     i32.lt_s
     br_if $folding-inner0
     local.get $1
     local.set $5
     global.get $~lib/memory/__stack_pointer
     local.tee $7
     i32.const 0
     i32.const 20
     memory.fill $0
     i32.const 0
     local.set $1
     local.get $7
     local.get $0
     i32.store $0 offset=4
     local.get $7
     local.get $0
     i32.load $0
     local.tee $8
     i32.store $0
     local.get $7
     i32.const 4
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2064
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     local.tee $7
     i32.const 0
     i32.store $0
     local.get $7
     local.get $8
     i32.store $0
     local.get $8
     i32.load $0 offset=12
     local.set $8
     local.get $7
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     loop $for-loop|0
      local.get $6
      local.get $8
      i32.lt_s
      if
       global.get $~lib/memory/__stack_pointer
       local.tee $7
       local.get $0
       i32.store $0 offset=16
       local.get $7
       local.get $0
       i32.load $0
       local.tee $9
       i32.store $0 offset=12
       local.get $7
       i32.const 8
       i32.sub
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 2064
       i32.lt_s
       br_if $folding-inner0
       global.get $~lib/memory/__stack_pointer
       local.tee $7
       i64.const 0
       i64.store $0
       local.get $7
       local.get $9
       i32.store $0
       local.get $6
       local.get $9
       i32.load $0 offset=12
       i32.ge_u
       if
        i32.const 1056
        i32.const 1664
        i32.const 114
        i32.const 42
        call $~lib/builtins/abort
        unreachable
       end
       global.get $~lib/memory/__stack_pointer
       local.tee $7
       local.get $9
       i32.store $0
       local.get $7
       local.get $9
       i32.load $0 offset=4
       local.get $6
       i32.const 2
       i32.shl
       i32.add
       i32.load $0
       local.tee $7
       i32.store $0 offset=4
       local.get $7
       i32.eqz
       if
        i32.const 1872
        i32.const 1664
        i32.const 118
        i32.const 40
        call $~lib/builtins/abort
        unreachable
       end
       global.get $~lib/memory/__stack_pointer
       i32.const 8
       i32.add
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       local.get $7
       i32.store $0
       global.get $~lib/memory/__stack_pointer
       local.get $5
       i32.store $0 offset=4
       global.get $~lib/memory/__stack_pointer
       global.get $assembly/hittables/index/IRecord
       local.tee $9
       i32.store $0 offset=8
       local.get $7
       local.get $5
       local.get $2
       local.get $3
       local.get $9
       call $assembly/hittables/Hittable/Hittable#hit@override
       if
        global.get $~lib/memory/__stack_pointer
        local.tee $1
        global.get $assembly/hittables/index/IRecord
        local.tee $7
        i32.store $0
        local.get $7
        f64.load $0
        local.set $3
        local.get $1
        local.get $4
        i32.store $0
        local.get $1
        local.get $7
        i32.store $0 offset=4
        local.get $1
        i32.const 12
        i32.sub
        global.set $~lib/memory/__stack_pointer
        global.get $~lib/memory/__stack_pointer
        i32.const 2064
        i32.lt_s
        br_if $folding-inner0
        global.get $~lib/memory/__stack_pointer
        local.tee $1
        i64.const 0
        i64.store $0
        local.get $1
        i32.const 0
        i32.store $0 offset=8
        local.get $1
        local.get $4
        i32.store $0
        local.get $1
        local.get $7
        i32.store $0 offset=4
        local.get $4
        local.get $7
        i32.load8_u $0 offset=8
        i32.store8 $0 offset=8
        local.get $1
        local.get $4
        i32.store $0 offset=8
        local.get $1
        local.get $4
        i32.load $0 offset=16
        local.tee $9
        i32.store $0
        local.get $1
        local.get $7
        i32.store $0 offset=8
        local.get $1
        local.get $7
        i32.load $0 offset=16
        local.tee $1
        i32.store $0 offset=4
        local.get $9
        local.get $1
        call $assembly/utils/Vector3/Vector3#copy
        global.get $~lib/memory/__stack_pointer
        local.get $4
        i32.store $0 offset=8
        global.get $~lib/memory/__stack_pointer
        local.get $4
        i32.load $0 offset=12
        local.tee $1
        i32.store $0
        global.get $~lib/memory/__stack_pointer
        local.get $7
        i32.store $0 offset=8
        global.get $~lib/memory/__stack_pointer
        local.get $7
        i32.load $0 offset=12
        local.tee $9
        i32.store $0 offset=4
        local.get $1
        local.get $9
        call $assembly/utils/Vector3/Vector3#copy
        global.get $~lib/memory/__stack_pointer
        local.get $4
        i32.store $0
        global.get $~lib/memory/__stack_pointer
        local.get $7
        i32.store $0 offset=4
        local.get $4
        local.get $7
        f64.load $0
        f64.store $0
        global.get $~lib/memory/__stack_pointer
        i32.const 12
        i32.add
        global.set $~lib/memory/__stack_pointer
        i32.const 1
        local.set $1
       end
       local.get $6
       i32.const 1
       i32.add
       local.set $6
       br $for-loop|0
      end
     end
     global.get $~lib/memory/__stack_pointer
     i32.const 20
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $1
     return
    end
    local.get $0
    local.get $1
    local.get $2
    local.get $3
    local.get $4
    call $assembly/hittables/Sphere/Sphere#hit
    return
   end
   unreachable
  end
  i32.const 34864
  i32.const 34912
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  block $folding-inner4
   block $folding-inner3
    block $folding-inner2
     block $folding-inner0
      block $invalid
       block $assembly/Ray/Ray
        block $~lib/array/Array<i32>
         block $assembly/hittables/Sphere/Sphere
          block $~lib/array/Array<assembly/hittables/Hittable/Hittable>
           block $assembly/hittables/Hittable/Hittable
            block $assembly/Camera/Camera
             block $assembly/Tracer/Tracer
              block $assembly/hittables/Record/Record
               block $~lib/function/Function<%28~lib/typedarray/Uint8ClampedArray%2C~lib/typedarray/Float32Array%2Cassembly/utils/Vector3/Vector3%2Cu16%29=>~lib/typedarray/Uint8ClampedArray>
                block $~lib/staticarray/StaticArray<f64>
                 block $~lib/string/String
                  block $~lib/arraybuffer/ArrayBuffer
                   block $~lib/object/Object
                    local.get $0
                    i32.const 8
                    i32.sub
                    i32.load $0
                    br_table $~lib/object/Object $~lib/arraybuffer/ArrayBuffer $~lib/string/String $folding-inner4 $folding-inner4 $folding-inner4 $folding-inner4 $~lib/staticarray/StaticArray<f64> $~lib/function/Function<%28~lib/typedarray/Uint8ClampedArray%2C~lib/typedarray/Float32Array%2Cassembly/utils/Vector3/Vector3%2Cu16%29=>~lib/typedarray/Uint8ClampedArray> $assembly/hittables/Record/Record $assembly/Tracer/Tracer $assembly/Camera/Camera $folding-inner4 $folding-inner4 $assembly/hittables/Hittable/Hittable $~lib/array/Array<assembly/hittables/Hittable/Hittable> $assembly/hittables/Sphere/Sphere $~lib/array/Array<i32> $assembly/Ray/Ray $invalid
                   end
                   return
                  end
                  return
                 end
                 return
                end
                return
               end
               global.get $~lib/memory/__stack_pointer
               i32.const 4
               i32.sub
               global.set $~lib/memory/__stack_pointer
               global.get $~lib/memory/__stack_pointer
               i32.const 2064
               i32.lt_s
               br_if $folding-inner0
               global.get $~lib/memory/__stack_pointer
               local.tee $1
               i32.const 0
               i32.store $0
               local.get $1
               local.get $0
               i32.store $0
               local.get $0
               i32.load $0 offset=4
               local.tee $0
               if
                local.get $0
                call $byn-split-outlined-A$~lib/rt/itcms/__visit
               end
               global.get $~lib/memory/__stack_pointer
               i32.const 4
               i32.add
               global.set $~lib/memory/__stack_pointer
               return
              end
              local.get $0
              i32.load $0 offset=12
              local.tee $1
              if
               local.get $1
               call $byn-split-outlined-A$~lib/rt/itcms/__visit
              end
              local.get $0
              i32.load $0 offset=16
              local.tee $0
              if
               local.get $0
               call $byn-split-outlined-A$~lib/rt/itcms/__visit
              end
              return
             end
             local.get $0
             i32.load $0
             local.tee $1
             if
              local.get $1
              call $byn-split-outlined-A$~lib/rt/itcms/__visit
             end
             local.get $0
             i32.load $0 offset=4
             local.tee $0
             if
              local.get $0
              call $byn-split-outlined-A$~lib/rt/itcms/__visit
             end
             return
            end
            local.get $0
            i32.load $0 offset=16
            local.tee $1
            if
             local.get $1
             call $byn-split-outlined-A$~lib/rt/itcms/__visit
            end
            local.get $0
            i32.load $0 offset=20
            local.tee $1
            if
             local.get $1
             call $byn-split-outlined-A$~lib/rt/itcms/__visit
            end
            br $folding-inner3
           end
           return
          end
          global.get $~lib/memory/__stack_pointer
          i32.const 4
          i32.sub
          global.set $~lib/memory/__stack_pointer
          global.get $~lib/memory/__stack_pointer
          i32.const 2064
          i32.lt_s
          br_if $folding-inner0
          global.get $~lib/memory/__stack_pointer
          local.tee $2
          i32.const 0
          i32.store $0
          local.get $2
          local.get $0
          i32.store $0
          local.get $0
          i32.load $0 offset=4
          local.set $1
          local.get $2
          local.get $0
          i32.store $0
          local.get $1
          local.get $0
          i32.load $0 offset=12
          i32.const 2
          i32.shl
          i32.add
          local.set $2
          loop $while-continue|0
           local.get $1
           local.get $2
           i32.lt_u
           if
            local.get $1
            i32.load $0
            local.tee $3
            if
             local.get $3
             call $byn-split-outlined-A$~lib/rt/itcms/__visit
            end
            local.get $1
            i32.const 4
            i32.add
            local.set $1
            br $while-continue|0
           end
          end
          br $folding-inner2
         end
         local.get $0
         i32.load $0 offset=8
         local.tee $0
         if
          local.get $0
          call $byn-split-outlined-A$~lib/rt/itcms/__visit
         end
         return
        end
        global.get $~lib/memory/__stack_pointer
        i32.const 4
        i32.sub
        global.set $~lib/memory/__stack_pointer
        global.get $~lib/memory/__stack_pointer
        i32.const 2064
        i32.lt_s
        br_if $folding-inner0
        global.get $~lib/memory/__stack_pointer
        i32.const 0
        i32.store $0
        br $folding-inner2
       end
       local.get $0
       i32.load $0
       local.tee $1
       if
        local.get $1
        call $byn-split-outlined-A$~lib/rt/itcms/__visit
       end
       br $folding-inner3
      end
      unreachable
     end
     i32.const 34864
     i32.const 34912
     i32.const 1
     i32.const 1
     call $~lib/builtins/abort
     unreachable
    end
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0
    local.get $0
    i32.load $0
    local.tee $0
    if
     local.get $0
     call $byn-split-outlined-A$~lib/rt/itcms/__visit
    end
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    return
   end
   local.get $0
   i32.load $0 offset=24
   local.tee $1
   if
    local.get $1
    call $byn-split-outlined-A$~lib/rt/itcms/__visit
   end
   local.get $0
   i32.load $0 offset=28
   local.tee $0
   if
    local.get $0
    call $byn-split-outlined-A$~lib/rt/itcms/__visit
   end
   return
  end
  local.get $0
  i32.load $0
  local.tee $0
  if
   local.get $0
   call $byn-split-outlined-A$~lib/rt/itcms/__visit
  end
 )
 (func $~start
  call $start:assembly/Tracer
 )
 (func $~lib/typedarray/Float32Array#__get (param $0 i32) (param $1 i32) (result f32)
  (local $2 f32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 0
  i32.store $0
  local.get $3
  local.get $0
  i32.store $0
  local.get $1
  local.get $0
  i32.load $0 offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 1304
   i32.const 64
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  local.get $0
  i32.store $0
  local.get $0
  i32.load $0 offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  f32.load $0
  local.set $2
  local.get $3
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $~lib/staticarray/StaticArray<f64>#__set (param $0 i32) (param $1 i32) (param $2 f64)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 0
  i32.store $0
  local.get $3
  local.get $0
  i32.store $0
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load $0 offset=16
  i32.const 3
  i32.shr_u
  i32.ge_u
  if
   i32.const 1056
   i32.const 1184
   i32.const 93
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  local.get $0
  i32.store $0
  local.get $0
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  local.get $2
  f64.store $0
  local.get $3
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/utils/Vector3/Vector3#set (param $0 i32) (param $1 f64) (param $2 f64) (param $3 f64) (result i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $4
  i64.const 0
  i64.store $0
  local.get $4
  local.get $0
  i32.store $0 offset=4
  local.get $4
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0
  local.get $4
  i32.const 0
  local.get $1
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0
  local.get $4
  i32.const 1
  local.get $2
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0
  local.get $4
  i32.const 2
  local.get $3
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/staticarray/StaticArray<f64>#__get (param $0 i32) (param $1 i32) (result f64)
  (local $2 i32)
  (local $3 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i32.const 0
  i32.store $0
  local.get $2
  local.get $0
  i32.store $0
  local.get $1
  local.get $0
  i32.const 20
  i32.sub
  i32.load $0 offset=16
  i32.const 3
  i32.shr_u
  i32.ge_u
  if
   i32.const 1056
   i32.const 1184
   i32.const 78
   i32.const 41
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  f64.load $0
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $assembly/utils/Vector3/Vector3#multiplyScalar (param $0 i32) (param $1 f64) (result i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store $0
  local.get $2
  i32.const 0
  i32.store $0 offset=8
  local.get $2
  local.get $0
  i32.store $0 offset=4
  local.get $2
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  local.get $2
  local.get $0
  i32.store $0 offset=8
  local.get $2
  local.get $0
  i32.load $0
  local.tee $2
  i32.store $0 offset=4
  local.get $3
  i32.const 0
  local.get $2
  i32.const 0
  call $~lib/staticarray/StaticArray<f64>#__get
  local.get $1
  f64.mul
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $2
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0 offset=4
  local.get $2
  i32.const 1
  local.get $3
  i32.const 1
  call $~lib/staticarray/StaticArray<f64>#__get
  local.get $1
  f64.mul
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $2
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0 offset=4
  local.get $2
  i32.const 2
  local.get $3
  i32.const 2
  call $~lib/staticarray/StaticArray<f64>#__get
  local.get $1
  f64.mul
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/utils/Vector3/Vector3#divideScalar (param $0 i32) (param $1 f64) (result i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i32.const 0
  i32.store $0
  local.get $2
  local.get $0
  i32.store $0
  local.get $0
  f64.const 1
  local.get $1
  f64.div
  call $assembly/utils/Vector3/Vector3#multiplyScalar
  local.set $0
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/typedarray/Uint8ClampedArray#__set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 0
  i32.store $0
  local.get $3
  local.get $0
  i32.store $0
  local.get $1
  local.get $0
  i32.load $0 offset=8
  i32.ge_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 320
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  local.get $0
  i32.store $0
  local.get $1
  local.get $0
  i32.load $0 offset=4
  i32.add
  i32.const 255
  local.get $2
  i32.sub
  i32.const 31
  i32.shr_s
  local.get $2
  i32.or
  local.get $2
  i32.const 31
  i32.shr_s
  i32.const -1
  i32.xor
  i32.and
  i32.store8 $0
  local.get $3
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $start:assembly/utils/Color~anonymous|0 (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 f64)
  (local $6 f64)
  (local $7 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store $0
   local.get $3
   i32.const 0
   i32.store $0 offset=8
   loop $for-loop|0
    global.get $~lib/memory/__stack_pointer
    local.tee $3
    local.get $1
    i32.store $0
    local.get $3
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $3
    i32.const 0
    i32.store $0
    local.get $3
    local.get $1
    i32.store $0
    local.get $1
    i32.load $0 offset=8
    i32.const 2
    i32.shr_u
    local.set $7
    local.get $3
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $4
    local.get $7
    i32.lt_s
    if
     global.get $~lib/memory/__stack_pointer
     local.tee $3
     local.get $2
     i32.store $0 offset=4
     local.get $3
     local.get $1
     i32.store $0 offset=8
     local.get $1
     local.get $4
     call $~lib/typedarray/Float32Array#__get
     f64.promote_f32
     local.set $5
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store $0 offset=8
     local.get $1
     local.get $4
     i32.const 1
     i32.add
     call $~lib/typedarray/Float32Array#__get
     f64.promote_f32
     local.set $6
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.store $0 offset=8
     local.get $2
     local.get $5
     local.get $6
     local.get $1
     local.get $4
     i32.const 2
     i32.add
     call $~lib/typedarray/Float32Array#__get
     f64.promote_f32
     call $assembly/utils/Vector3/Vector3#set
     local.set $3
     global.get $~lib/memory/__stack_pointer
     local.get $3
     i32.store $0
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2064
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     local.tee $7
     i32.const 0
     i32.store $0
     local.get $7
     local.get $3
     i32.store $0
     local.get $3
     f64.const 1
     call $assembly/utils/Vector3/Vector3#divideScalar
     drop
     global.get $~lib/memory/__stack_pointer
     i32.const 4
     i32.add
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.store $0 offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2064
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     local.tee $3
     i64.const 0
     i64.store $0
     local.get $3
     local.get $2
     i32.store $0 offset=4
     local.get $3
     local.get $2
     i32.load $0
     local.tee $3
     i32.store $0
     local.get $3
     i32.const 0
     call $~lib/staticarray/StaticArray<f64>#__get
     i32.trunc_sat_f64_u
     local.set $3
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     local.get $3
     i32.const 255
     i32.and
     call $~lib/typedarray/Uint8ClampedArray#__set
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.store $0 offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2064
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     local.tee $3
     i64.const 0
     i64.store $0
     local.get $3
     local.get $2
     i32.store $0 offset=4
     local.get $3
     local.get $2
     i32.load $0
     local.tee $3
     i32.store $0
     local.get $3
     i32.const 1
     call $~lib/staticarray/StaticArray<f64>#__get
     i32.trunc_sat_f64_u
     local.set $3
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     i32.const 1
     i32.add
     local.get $3
     i32.const 255
     i32.and
     call $~lib/typedarray/Uint8ClampedArray#__set
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0
     global.get $~lib/memory/__stack_pointer
     local.get $2
     i32.store $0 offset=4
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2064
     i32.lt_s
     br_if $folding-inner0
     global.get $~lib/memory/__stack_pointer
     local.tee $3
     i64.const 0
     i64.store $0
     local.get $3
     local.get $2
     i32.store $0 offset=4
     local.get $3
     local.get $2
     i32.load $0
     local.tee $3
     i32.store $0
     local.get $3
     i32.const 2
     call $~lib/staticarray/StaticArray<f64>#__get
     i32.trunc_sat_f64_u
     local.set $3
     global.get $~lib/memory/__stack_pointer
     i32.const 8
     i32.add
     global.set $~lib/memory/__stack_pointer
     local.get $0
     local.get $4
     i32.const 2
     i32.add
     local.get $3
     i32.const 255
     i32.and
     call $~lib/typedarray/Uint8ClampedArray#__set
     local.get $4
     i32.const 3
     i32.add
     local.set $4
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $0
   return
  end
  i32.const 34864
  i32.const 34912
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/utils/Vector3/Vector3#constructor (param $0 f64) (param $1 f64) (param $2 f64) (result i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store $0
   local.get $3
   i32.const 0
   i32.store $0 offset=8
   local.get $3
   i32.const 4
   i32.const 6
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   local.get $3
   i32.store $0 offset=4
   local.get $4
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i32.const 0
   i32.store $0
   local.get $4
   i32.const 24
   i32.const 7
   call $~lib/rt/itcms/__new
   local.tee $4
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.store $0 offset=8
   local.get $3
   local.get $4
   i32.store $0
   local.get $4
   if
    local.get $3
    local.get $4
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   local.get $3
   i32.store $0 offset=8
   local.get $4
   local.get $3
   i32.load $0
   local.tee $4
   i32.store $0 offset=4
   local.get $4
   i32.const 0
   local.get $0
   call $~lib/staticarray/StaticArray<f64>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store $0 offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.load $0
   local.tee $4
   i32.store $0 offset=4
   local.get $4
   i32.const 1
   local.get $1
   call $~lib/staticarray/StaticArray<f64>#__set
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store $0 offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.load $0
   local.tee $4
   i32.store $0 offset=4
   local.get $4
   i32.const 2
   local.get $2
   call $~lib/staticarray/StaticArray<f64>#__set
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $3
   return
  end
  i32.const 34864
  i32.const 34912
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/utils/Vector3/Vector3#constructor@varargs (param $0 f64) (result i32)
  (local $1 f64)
  (local $2 f64)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store $0
  block $3of3
   block $2of3
    block $1of3
     block $0of3
      block $outOfRange
       global.get $~argumentsLength
       br_table $0of3 $1of3 $2of3 $3of3 $outOfRange
      end
      unreachable
     end
     f64.const 0
     local.set $0
    end
    local.get $0
    local.set $1
   end
   local.get $0
   local.set $2
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store $0
  local.get $0
  local.get $1
  local.get $2
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $3
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $3
 )
 (func $assembly/utils/Vector3/Vector3#get:clone (param $0 i32) (result i32)
  (local $1 f64)
  (local $2 f64)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i64.const 0
  i64.store $0
  local.get $3
  local.get $0
  i32.store $0 offset=4
  local.get $3
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  local.get $3
  i32.const 0
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $1
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  local.get $3
  i32.const 1
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $0
  i32.store $0
  local.get $1
  local.get $2
  local.get $0
  i32.const 2
  call $~lib/staticarray/StaticArray<f64>#__get
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/utils/Vector3/Vector3#get:x (param $0 i32) (result f64)
  (local $1 i32)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i64.const 0
  i64.store $0
  local.get $1
  local.get $0
  i32.store $0 offset=4
  local.get $1
  local.get $0
  i32.load $0
  local.tee $0
  i32.store $0
  local.get $0
  i32.const 0
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $assembly/utils/Vector3/Vector3#get:y (param $0 i32) (result f64)
  (local $1 i32)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i64.const 0
  i64.store $0
  local.get $1
  local.get $0
  i32.store $0 offset=4
  local.get $1
  local.get $0
  i32.load $0
  local.tee $0
  i32.store $0
  local.get $0
  i32.const 1
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $assembly/utils/Vector3/Vector3#get:z (param $0 i32) (result f64)
  (local $1 i32)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i64.const 0
  i64.store $0
  local.get $1
  local.get $0
  i32.store $0 offset=4
  local.get $1
  local.get $0
  i32.load $0
  local.tee $0
  i32.store $0
  local.get $0
  i32.const 2
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $assembly/utils/Vector3/Vector3#sub (param $0 i32) (param $1 i32) (result i32)
  (local $2 f64)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i64.const 0
  i64.store $0
  local.get $3
  i32.const 0
  i32.store $0 offset=8
  local.get $3
  local.get $0
  i32.store $0 offset=4
  local.get $3
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0
  local.get $3
  local.get $0
  i32.store $0 offset=8
  local.get $3
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0 offset=4
  local.get $3
  i32.const 0
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  local.get $4
  i32.const 0
  local.get $2
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:x
  f64.sub
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0 offset=4
  local.get $4
  i32.const 1
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  local.get $3
  i32.const 1
  local.get $2
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:y
  f64.sub
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0 offset=4
  local.get $4
  i32.const 2
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  local.get $3
  i32.const 2
  local.get $2
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:z
  f64.sub
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/Camera/Camera#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 48
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i32.const 0
  i32.const 48
  memory.fill $0
  local.get $1
  i32.const 32
  i32.const 11
  call $~lib/rt/itcms/__new
  local.tee $1
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $1
  i32.store $0 offset=4
  local.get $1
  f64.const 0
  f64.store $0
  local.get $2
  local.get $1
  i32.store $0 offset=4
  local.get $1
  f64.const 0
  f64.store $0 offset=8
  local.get $2
  local.get $1
  i32.store $0 offset=4
  i32.const 0
  global.set $~argumentsLength
  f64.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=8
  local.get $1
  local.get $2
  i32.store $0 offset=16
  local.get $2
  if
   local.get $1
   local.get $2
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  i32.const 0
  global.set $~argumentsLength
  f64.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=8
  local.get $1
  local.get $2
  i32.store $0 offset=20
  local.get $2
  if
   local.get $1
   local.get $2
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  i32.const 0
  global.set $~argumentsLength
  f64.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=8
  local.get $1
  local.get $2
  i32.store $0 offset=24
  local.get $2
  if
   local.get $1
   local.get $2
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  i32.const 0
  global.set $~argumentsLength
  f64.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=8
  local.get $1
  local.get $2
  i32.store $0 offset=28
  local.get $2
  if
   local.get $1
   local.get $2
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  local.get $1
  i32.store $0 offset=4
  local.get $2
  local.get $0
  i32.store $0 offset=8
  local.get $1
  local.get $0
  i32.store $0 offset=16
  local.get $0
  if
   local.get $1
   local.get $0
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  local.get $1
  i32.store $0 offset=4
  local.get $1
  f64.const 2
  f64.store $0 offset=8
  local.get $0
  local.get $1
  i32.store $0 offset=4
  local.get $0
  local.get $1
  i32.store $0 offset=8
  local.get $1
  local.get $1
  f64.load $0 offset=8
  f64.const 1.7777777777777777
  f64.mul
  f64.store $0
  local.get $0
  local.get $1
  i32.store $0 offset=4
  local.get $0
  local.get $1
  i32.store $0 offset=12
  local.get $1
  f64.load $0
  f64.const 0
  f64.const 0
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  local.get $1
  local.get $0
  i32.store $0 offset=24
  local.get $0
  if
   local.get $1
   local.get $0
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  local.get $1
  i32.store $0 offset=4
  local.get $0
  local.get $1
  i32.store $0 offset=12
  f64.const 0
  local.get $1
  f64.load $0 offset=8
  f64.const 0
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  local.get $1
  local.get $0
  i32.store $0 offset=20
  local.get $0
  if
   local.get $1
   local.get $0
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $0
  local.get $1
  i32.store $0 offset=4
  local.get $0
  local.get $1
  i32.store $0 offset=40
  local.get $0
  local.get $1
  i32.load $0 offset=16
  local.tee $0
  i32.store $0 offset=36
  local.get $0
  call $assembly/utils/Vector3/Vector3#get:clone
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=28
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=44
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load $0 offset=24
  local.tee $2
  i32.store $0 offset=40
  local.get $2
  call $assembly/utils/Vector3/Vector3#get:clone
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=36
  local.get $2
  f64.const 2
  call $assembly/utils/Vector3/Vector3#divideScalar
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=32
  local.get $0
  local.get $2
  call $assembly/utils/Vector3/Vector3#sub
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=20
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=36
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.load $0 offset=20
  local.tee $2
  i32.store $0 offset=32
  local.get $2
  call $assembly/utils/Vector3/Vector3#get:clone
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=28
  local.get $2
  f64.const 2
  call $assembly/utils/Vector3/Vector3#divideScalar
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=24
  local.get $0
  local.get $2
  call $assembly/utils/Vector3/Vector3#sub
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=12
  f64.const 0
  f64.const 0
  f64.const 1
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $2
  i32.store $0 offset=16
  local.get $0
  local.get $2
  call $assembly/utils/Vector3/Vector3#sub
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  local.get $1
  local.get $0
  i32.store $0 offset=28
  local.get $0
  if
   local.get $1
   local.get $0
   i32.const 0
   call $byn-split-outlined-A$~lib/rt/itcms/__link
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 48
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $1
 )
 (func $assembly/hittables/Hittable/Hittable#constructor (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i64.const 0
  i64.store $0
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 14
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store $0
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  local.get $0
  i32.store $0 offset=4
  local.get $1
  local.get $0
  call $~lib/object/Object#constructor
  local.tee $0
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/hittables/World/World#addSphere (param $0 i32) (param $1 f64) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store $0
   local.get $3
   i32.const 0
   i32.store $0 offset=8
   local.get $3
   local.get $0
   i32.store $0 offset=8
   local.get $3
   local.get $0
   i32.load $0
   local.tee $0
   i32.store $0
   local.get $3
   local.get $2
   i32.store $0 offset=8
   local.get $3
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store $0
   local.get $3
   i32.const 0
   i32.store $0 offset=8
   local.get $3
   i32.const 12
   i32.const 16
   call $~lib/rt/itcms/__new
   local.tee $3
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   local.get $3
   i32.store $0 offset=4
   local.get $3
   local.get $1
   f64.store $0
   local.get $4
   local.get $3
   i32.store $0 offset=4
   local.get $4
   local.get $2
   i32.store $0 offset=8
   local.get $3
   local.get $2
   i32.store $0 offset=8
   local.get $2
   if
    local.get $3
    local.get $2
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   local.get $3
   i32.store $0 offset=4
   local.get $2
   local.get $3
   call $assembly/hittables/Hittable/Hittable#constructor
   local.tee $3
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   local.get $3
   i32.store $0 offset=4
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $2
   i64.const 0
   i64.store $0
   local.get $2
   i32.const 0
   i32.store $0 offset=8
   local.get $2
   local.get $0
   i32.store $0 offset=8
   local.get $2
   local.get $0
   i32.load $0
   local.tee $4
   i32.store $0
   local.get $2
   local.get $3
   i32.store $0 offset=4
   local.get $2
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 0
   i32.store $0
   local.get $0
   local.get $4
   i32.store $0
   local.get $4
   i32.load $0 offset=12
   local.tee $6
   i32.const 1
   i32.add
   local.tee $7
   local.set $2
   local.get $0
   i32.const 4
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   i32.const 0
   i32.store $0
   local.get $0
   local.get $4
   i32.store $0
   local.get $2
   local.get $4
   i32.load $0 offset=8
   local.tee $0
   i32.const 2
   i32.shr_u
   i32.gt_u
   if
    local.get $2
    i32.const 268435455
    i32.gt_u
    if
     i32.const 1616
     i32.const 1664
     i32.const 19
     i32.const 48
     call $~lib/builtins/abort
     unreachable
    end
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store $0
    block $__inlined_func$~lib/rt/itcms/__renew
     i32.const 1073741820
     local.get $0
     i32.const 1
     i32.shl
     local.tee $0
     local.get $0
     i32.const 1073741820
     i32.ge_u
     select
     local.tee $0
     i32.const 8
     local.get $2
     local.get $2
     i32.const 8
     i32.le_u
     select
     i32.const 2
     i32.shl
     local.tee $2
     local.get $0
     local.get $2
     i32.gt_u
     select
     local.tee $5
     local.get $4
     i32.load $0
     local.tee $2
     i32.const 20
     i32.sub
     local.tee $8
     i32.load $0
     i32.const -4
     i32.and
     i32.const 16
     i32.sub
     i32.le_u
     if
      local.get $8
      local.get $5
      i32.store $0 offset=16
      local.get $2
      local.set $0
      br $__inlined_func$~lib/rt/itcms/__renew
     end
     local.get $5
     local.get $8
     i32.load $0 offset=12
     call $~lib/rt/itcms/__new
     local.tee $0
     local.get $2
     local.get $5
     local.get $8
     i32.load $0 offset=16
     local.tee $8
     local.get $5
     local.get $8
     i32.lt_u
     select
     memory.copy $0 $0
    end
    local.get $0
    local.get $2
    i32.ne
    if
     local.get $4
     local.get $0
     i32.store $0
     local.get $4
     local.get $0
     i32.store $0 offset=4
     local.get $0
     if
      local.get $4
      local.get $0
      i32.const 0
      call $byn-split-outlined-A$~lib/rt/itcms/__link
     end
    end
    local.get $4
    local.get $5
    i32.store $0 offset=8
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.store $0
   local.get $4
   i32.load $0 offset=4
   local.get $6
   i32.const 2
   i32.shl
   i32.add
   local.get $3
   i32.store $0
   local.get $3
   if
    local.get $4
    local.get $3
    i32.const 1
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $0
   local.get $4
   i32.store $0
   local.get $4
   local.get $7
   i32.store $0 offset=12
   local.get $0
   i32.const 4
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 34864
  i32.const 34912
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/utils/Vector3/Vector3#add (param $0 i32) (param $1 i32) (result i32)
  (local $2 f64)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i64.const 0
  i64.store $0
  local.get $3
  i32.const 0
  i32.store $0 offset=8
  local.get $3
  local.get $0
  i32.store $0 offset=4
  local.get $3
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0
  local.get $3
  local.get $0
  i32.store $0 offset=8
  local.get $3
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0 offset=4
  local.get $3
  i32.const 0
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  local.get $4
  i32.const 0
  local.get $2
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:x
  f64.add
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0 offset=4
  local.get $4
  i32.const 1
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  local.get $3
  i32.const 1
  local.get $2
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:y
  f64.add
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=8
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $4
  i32.store $0 offset=4
  local.get $4
  i32.const 2
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  local.get $3
  i32.const 2
  local.get $2
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:z
  f64.add
  call $~lib/staticarray/StaticArray<f64>#__set
  global.get $~lib/memory/__stack_pointer
  i32.const 12
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/utils/Vector3/Vector3#copy (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 f64)
  (local $4 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $2
  i64.const 0
  i64.store $0
  local.get $2
  local.get $0
  i32.store $0
  local.get $2
  local.get $1
  i32.store $0 offset=4
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:x
  local.set $3
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:y
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0 offset=4
  local.get $0
  local.get $3
  local.get $4
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:z
  call $assembly/utils/Vector3/Vector3#set
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/utils/Vector3/Vector3#reset (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i32.const 0
  i32.store $0
  local.get $1
  local.get $0
  i32.store $0
  local.get $0
  f64.const 1
  f64.const 1
  f64.const 1
  call $assembly/utils/Vector3/Vector3#set
  local.set $0
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/utils/Vector3/Vector3#dot (param $0 i32) (param $1 i32) (result f64)
  (local $2 f64)
  (local $3 i32)
  (local $4 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i64.const 0
  i64.store $0
  local.get $3
  local.get $0
  i32.store $0 offset=4
  local.get $3
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  local.get $3
  i32.const 0
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0
  local.get $2
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:x
  f64.mul
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $3
  i32.store $0
  local.get $3
  i32.const 1
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0
  local.get $2
  local.get $4
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:y
  f64.mul
  f64.add
  local.set $2
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0 offset=4
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.load $0
  local.tee $0
  i32.store $0
  local.get $0
  i32.const 2
  call $~lib/staticarray/StaticArray<f64>#__get
  local.set $4
  global.get $~lib/memory/__stack_pointer
  local.get $1
  i32.store $0
  local.get $2
  local.get $4
  local.get $1
  call $assembly/utils/Vector3/Vector3#get:z
  f64.mul
  f64.add
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $assembly/utils/Vector3/Vector3#get:lengthSquared (param $0 i32) (result f64)
  (local $1 i32)
  (local $2 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i64.const 0
  i64.store $0
  local.get $1
  local.get $0
  i32.store $0
  local.get $1
  local.get $0
  i32.store $0 offset=4
  local.get $0
  local.get $0
  call $assembly/utils/Vector3/Vector3#dot
  local.set $2
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $2
 )
 (func $assembly/Ray/Ray#getColor (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 f64)
  (local $4 i32)
  (local $5 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner1
   block $folding-inner0
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $4
    i32.const 0
    i32.const 20
    memory.fill $0
    local.get $4
    local.get $2
    i32.store $0
    local.get $4
    local.get $1
    i32.store $0 offset=4
    local.get $4
    local.get $0
    i32.store $0 offset=12
    local.get $0
    f64.load $0 offset=16
    local.set $3
    local.get $4
    local.get $0
    i32.store $0 offset=12
    local.get $0
    f64.load $0 offset=8
    local.set $5
    local.get $4
    global.get $assembly/hittables/index/IRecord
    local.tee $4
    i32.store $0 offset=8
    local.get $2
    local.get $1
    local.get $3
    local.get $5
    local.get $4
    call $assembly/hittables/Hittable/Hittable#hit@override
    if
     global.get $~lib/memory/__stack_pointer
     local.tee $1
     local.get $0
     i32.store $0 offset=16
     local.get $1
     local.get $0
     i32.load $0
     local.tee $0
     i32.store $0 offset=12
     local.get $0
     call $assembly/utils/Vector3/Vector3#reset
     local.set $0
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0 offset=4
     global.get $~lib/memory/__stack_pointer
     global.get $assembly/hittables/index/IRecord
     local.tee $1
     i32.store $0 offset=12
     global.get $~lib/memory/__stack_pointer
     local.get $1
     i32.load $0 offset=16
     local.tee $1
     i32.store $0 offset=8
     local.get $0
     local.get $1
     call $assembly/utils/Vector3/Vector3#add
     local.set $0
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0
     local.get $0
     f64.const 0.5
     call $assembly/utils/Vector3/Vector3#multiplyScalar
     local.set $0
     br $folding-inner1
    end
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    local.get $1
    i32.store $0 offset=8
    local.get $2
    local.get $1
    i32.load $0 offset=28
    local.tee $1
    i32.store $0 offset=4
    local.get $2
    i32.const 8
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    i64.const 0
    i64.store $0
    local.get $2
    local.get $1
    i32.store $0
    local.get $2
    local.get $1
    i32.store $0 offset=4
    local.get $2
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner0
    global.get $~lib/memory/__stack_pointer
    local.tee $2
    i32.const 0
    i32.store $0
    local.get $2
    local.get $1
    i32.store $0
    local.get $1
    call $assembly/utils/Vector3/Vector3#get:lengthSquared
    f64.sqrt
    local.set $3
    global.get $~lib/memory/__stack_pointer
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    local.get $1
    local.get $3
    call $assembly/utils/Vector3/Vector3#divideScalar
    local.set $1
    global.get $~lib/memory/__stack_pointer
    i32.const 8
    i32.add
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0
    local.get $1
    call $assembly/utils/Vector3/Vector3#get:y
    f64.const 1
    f64.add
    f64.const 0.5
    f64.mul
    local.set $3
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=16
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load $0
    local.tee $0
    i32.store $0 offset=12
    local.get $0
    call $assembly/utils/Vector3/Vector3#reset
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=8
    local.get $0
    f64.const 1
    local.get $3
    f64.sub
    call $assembly/utils/Vector3/Vector3#multiplyScalar
    local.set $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0
    f64.const 0.5
    f64.const 0.7
    f64.const 1
    call $assembly/utils/Vector3/Vector3#constructor
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0 offset=8
    local.get $1
    local.get $3
    call $assembly/utils/Vector3/Vector3#multiplyScalar
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0 offset=4
    local.get $0
    local.get $1
    call $assembly/utils/Vector3/Vector3#add
    local.set $0
    br $folding-inner1
   end
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 20
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $~lib/typedarray/Float32Array#__set (param $0 i32) (param $1 i32) (param $2 f32)
  (local $3 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  i32.const 0
  i32.store $0
  local.get $3
  local.get $0
  i32.store $0
  local.get $1
  local.get $0
  i32.load $0 offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 1315
   i32.const 64
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $3
  local.get $0
  i32.store $0
  local.get $0
  i32.load $0 offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  f32.store $0
  local.get $3
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/Tracer/Tracer#createPPMImage (param $0 i32) (param $1 i32)
  (local $2 f64)
  (local $3 f64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 f64)
  (local $10 f64)
  (local $11 f64)
  (local $12 i32)
  (local $13 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $5
   i32.const 0
   i32.const 28
   memory.fill $0
   i32.const 0
   global.set $~argumentsLength
   local.get $5
   i32.const 20
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 20
   memory.fill $0
   block $2of2
    block $1of2
     block $0of2
      block $outOfRange
       global.get $~argumentsLength
       br_table $0of2 $1of2 $2of2 $outOfRange
      end
      unreachable
     end
     i32.const 0
     global.set $~argumentsLength
     global.get $~lib/memory/__stack_pointer
     f64.const 0
     call $assembly/utils/Vector3/Vector3#constructor@varargs
     local.tee $6
     i32.store $0
    end
    i32.const 0
    global.set $~argumentsLength
    global.get $~lib/memory/__stack_pointer
    f64.const 0
    call $assembly/utils/Vector3/Vector3#constructor@varargs
    local.tee $13
    i32.store $0 offset=4
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i32.const 0
   i32.store $0 offset=8
   local.get $4
   local.get $6
   i32.store $0 offset=12
   local.get $4
   local.get $13
   i32.store $0 offset=16
   local.get $4
   i32.const 12
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner1
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   i64.const 0
   i64.store $0
   local.get $4
   i32.const 0
   i32.store $0 offset=8
   local.get $4
   i32.const 32
   i32.const 18
   call $~lib/rt/itcms/__new
   local.tee $7
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   local.get $7
   i32.store $0 offset=4
   local.get $4
   local.get $6
   i32.store $0 offset=8
   local.get $7
   local.get $6
   i32.store $0 offset=24
   local.get $6
   if
    local.get $7
    local.get $6
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   local.get $7
   i32.store $0 offset=4
   local.get $4
   local.get $13
   i32.store $0 offset=8
   local.get $7
   local.get $13
   i32.store $0 offset=28
   local.get $13
   if
    local.get $7
    local.get $13
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   local.get $7
   i32.store $0 offset=4
   i32.const 1
   global.set $~argumentsLength
   f64.const 1
   call $assembly/utils/Vector3/Vector3#constructor@varargs
   local.set $4
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.store $0 offset=8
   local.get $7
   local.get $4
   i32.store $0
   local.get $4
   if
    local.get $7
    local.get $4
    i32.const 0
    call $byn-split-outlined-A$~lib/rt/itcms/__link
   end
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   local.get $7
   i32.store $0 offset=4
   local.get $7
   f64.const inf
   f64.store $0 offset=8
   local.get $4
   local.get $7
   i32.store $0 offset=4
   local.get $7
   f64.const 0.001
   f64.store $0 offset=16
   local.get $4
   i32.const 12
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 20
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $5
   local.get $7
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   local.tee $4
   local.get $0
   i32.store $0 offset=4
   local.get $0
   f64.load $0 offset=16
   local.set $3
   local.get $4
   local.get $0
   i32.store $0 offset=4
   local.get $0
   f64.load $0 offset=8
   f64.const -1
   f64.add
   local.set $11
   local.get $3
   f64.const -1
   f64.add
   local.set $10
   loop $for-loop|0
    local.get $3
    local.tee $2
    f64.const -1
    f64.add
    local.set $3
    local.get $2
    i64.reinterpret_f64
    i64.const 1
    i64.shl
    i64.const 2
    i64.sub
    i64.const -9007199254740994
    i64.le_u
    if
     i32.const 0
     local.set $13
     loop $for-loop|1
      global.get $~lib/memory/__stack_pointer
      local.get $0
      i32.store $0 offset=4
      local.get $0
      f64.load $0 offset=8
      local.get $13
      f64.convert_i32_s
      f64.gt
      if
       global.get $~lib/memory/__stack_pointer
       local.tee $4
       local.get $0
       i32.store $0 offset=12
       local.get $4
       local.get $0
       i32.load $0
       local.tee $6
       i32.store $0 offset=4
       local.get $4
       local.get $7
       i32.store $0 offset=8
       local.get $13
       f64.convert_i32_s
       local.get $11
       f64.div
       local.set $9
       local.get $3
       local.get $10
       f64.div
       local.set $2
       local.get $4
       i32.const 44
       i32.sub
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 2064
       i32.lt_s
       br_if $folding-inner1
       global.get $~lib/memory/__stack_pointer
       local.tee $4
       i32.const 0
       i32.const 44
       memory.fill $0
       local.get $4
       local.get $7
       i32.store $0
       local.get $4
       local.get $6
       i32.store $0 offset=36
       local.get $4
       local.get $6
       i32.load $0 offset=28
       local.tee $4
       i32.store $0 offset=32
       local.get $4
       call $assembly/utils/Vector3/Vector3#get:clone
       local.set $5
       global.get $~lib/memory/__stack_pointer
       local.get $5
       i32.store $0 offset=24
       global.get $~lib/memory/__stack_pointer
       local.get $6
       i32.store $0 offset=40
       global.get $~lib/memory/__stack_pointer
       local.get $6
       i32.load $0 offset=24
       local.tee $4
       i32.store $0 offset=36
       local.get $4
       call $assembly/utils/Vector3/Vector3#get:clone
       local.set $4
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.store $0 offset=32
       local.get $4
       local.get $9
       call $assembly/utils/Vector3/Vector3#multiplyScalar
       local.set $4
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.store $0 offset=28
       local.get $5
       local.get $4
       call $assembly/utils/Vector3/Vector3#add
       local.set $5
       global.get $~lib/memory/__stack_pointer
       local.get $5
       i32.store $0 offset=16
       global.get $~lib/memory/__stack_pointer
       local.get $6
       i32.store $0 offset=32
       global.get $~lib/memory/__stack_pointer
       local.get $6
       i32.load $0 offset=20
       local.tee $4
       i32.store $0 offset=28
       local.get $4
       call $assembly/utils/Vector3/Vector3#get:clone
       local.set $4
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.store $0 offset=24
       local.get $4
       local.get $2
       call $assembly/utils/Vector3/Vector3#multiplyScalar
       local.set $4
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.store $0 offset=20
       local.get $5
       local.get $4
       call $assembly/utils/Vector3/Vector3#add
       local.set $5
       global.get $~lib/memory/__stack_pointer
       local.get $5
       i32.store $0 offset=8
       global.get $~lib/memory/__stack_pointer
       local.get $6
       i32.store $0 offset=16
       global.get $~lib/memory/__stack_pointer
       local.get $6
       i32.load $0 offset=16
       local.tee $4
       i32.store $0 offset=12
       local.get $5
       local.get $4
       call $assembly/utils/Vector3/Vector3#sub
       local.set $5
       global.get $~lib/memory/__stack_pointer
       local.get $5
       i32.store $0 offset=4
       global.get $~lib/memory/__stack_pointer
       i32.const 12
       i32.sub
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 2064
       i32.lt_s
       br_if $folding-inner1
       global.get $~lib/memory/__stack_pointer
       local.tee $8
       i64.const 0
       i64.store $0
       local.get $8
       i32.const 0
       i32.store $0 offset=8
       local.get $8
       local.get $7
       i32.store $0 offset=8
       local.get $8
       local.get $7
       i32.load $0 offset=28
       local.tee $4
       i32.store $0
       local.get $8
       local.get $5
       i32.store $0 offset=4
       local.get $4
       local.get $5
       call $assembly/utils/Vector3/Vector3#copy
       global.get $~lib/memory/__stack_pointer
       i32.const 12
       i32.add
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       local.get $7
       i32.store $0
       global.get $~lib/memory/__stack_pointer
       local.get $6
       i32.store $0 offset=8
       global.get $~lib/memory/__stack_pointer
       local.get $6
       i32.load $0 offset=16
       local.tee $6
       i32.store $0 offset=4
       global.get $~lib/memory/__stack_pointer
       i32.const 12
       i32.sub
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 2064
       i32.lt_s
       br_if $folding-inner1
       global.get $~lib/memory/__stack_pointer
       local.tee $5
       i64.const 0
       i64.store $0
       local.get $5
       i32.const 0
       i32.store $0 offset=8
       local.get $5
       local.get $7
       i32.store $0 offset=8
       local.get $5
       local.get $7
       i32.load $0 offset=24
       local.tee $4
       i32.store $0
       local.get $5
       local.get $6
       i32.store $0 offset=4
       local.get $4
       local.get $6
       call $assembly/utils/Vector3/Vector3#copy
       global.get $~lib/memory/__stack_pointer
       i32.const 12
       i32.add
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 44
       i32.add
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       local.tee $6
       local.get $7
       i32.store $0 offset=4
       local.get $6
       local.get $7
       i32.store $0 offset=8
       local.get $6
       local.get $0
       i32.store $0 offset=20
       local.get $6
       local.get $0
       i32.load $0 offset=4
       local.tee $4
       i32.store $0 offset=16
       local.get $6
       i32.const 4
       i32.sub
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       i32.const 2064
       i32.lt_s
       br_if $folding-inner1
       global.get $~lib/memory/__stack_pointer
       local.tee $5
       i32.const 0
       i32.store $0
       local.get $5
       local.get $4
       i32.store $0
       local.get $4
       i32.load $0
       local.set $4
       local.get $5
       i32.const 4
       i32.add
       global.set $~lib/memory/__stack_pointer
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.store $0 offset=12
       local.get $6
       local.get $7
       local.get $7
       local.get $4
       call $assembly/Ray/Ray#getColor
       local.tee $4
       i32.store $0 offset=24
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.store $0 offset=4
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.store $0 offset=8
       local.get $1
       local.get $12
       local.get $4
       call $assembly/utils/Vector3/Vector3#get:x
       f64.const 255.999
       f64.mul
       f32.demote_f64
       call $~lib/typedarray/Float32Array#__set
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.store $0 offset=4
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.store $0 offset=8
       local.get $1
       local.get $12
       i32.const 1
       i32.add
       local.get $4
       call $assembly/utils/Vector3/Vector3#get:y
       f64.const 255.999
       f64.mul
       f32.demote_f64
       call $~lib/typedarray/Float32Array#__set
       global.get $~lib/memory/__stack_pointer
       local.get $1
       i32.store $0 offset=4
       global.get $~lib/memory/__stack_pointer
       local.get $4
       i32.store $0 offset=8
       local.get $1
       local.get $12
       i32.const 2
       i32.add
       local.get $4
       call $assembly/utils/Vector3/Vector3#get:z
       f64.const 255.999
       f64.mul
       f32.demote_f64
       call $~lib/typedarray/Float32Array#__set
       local.get $13
       i32.const 1
       i32.add
       local.set $13
       local.get $12
       i32.const 3
       i32.add
       local.set $12
       br $for-loop|1
      end
     end
     br $for-loop|0
    end
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 28
   i32.add
   global.set $~lib/memory/__stack_pointer
   return
  end
  i32.const 34864
  i32.const 34912
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $assembly/Ray/Ray#get:direction (param $0 i32) (result i32)
  (local $1 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  local.tee $1
  i32.const 0
  i32.store $0
  local.get $1
  local.get $0
  i32.store $0
  local.get $0
  i32.load $0 offset=28
  local.set $0
  local.get $1
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $assembly/hittables/Sphere/Sphere#hit (param $0 i32) (param $1 i32) (param $2 f64) (param $3 f64) (param $4 i32) (result i32)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 f64)
  global.get $~lib/memory/__stack_pointer
  i32.const 28
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner2
   block $folding-inner1
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner2
    global.get $~lib/memory/__stack_pointer
    local.tee $8
    i32.const 0
    i32.const 28
    memory.fill $0
    local.get $8
    local.get $1
    i32.store $0 offset=12
    local.get $8
    i32.const 4
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner2
    global.get $~lib/memory/__stack_pointer
    local.tee $9
    i32.const 0
    i32.store $0
    local.get $9
    local.get $1
    i32.store $0
    local.get $1
    i32.load $0 offset=24
    local.set $10
    local.get $9
    i32.const 4
    i32.add
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    local.get $10
    i32.store $0 offset=8
    local.get $10
    call $assembly/utils/Vector3/Vector3#get:clone
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $9
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load $0 offset=8
    local.tee $10
    i32.store $0 offset=4
    local.get $8
    local.get $9
    local.get $10
    call $assembly/utils/Vector3/Vector3#sub
    local.tee $8
    i32.store $0 offset=16
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0 offset=4
    local.get $1
    call $assembly/Ray/Ray#get:direction
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $9
    i32.store $0
    local.get $9
    call $assembly/utils/Vector3/Vector3#get:lengthSquared
    local.set $7
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0 offset=8
    local.get $1
    call $assembly/Ray/Ray#get:direction
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $9
    i32.store $0 offset=4
    local.get $8
    local.get $9
    call $assembly/utils/Vector3/Vector3#dot
    local.set $6
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store $0
    local.get $8
    call $assembly/utils/Vector3/Vector3#get:lengthSquared
    local.set $5
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0
    local.get $0
    f64.load $0
    local.set $11
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0
    local.get $6
    local.get $6
    f64.mul
    local.get $7
    local.get $5
    local.get $11
    local.get $0
    f64.load $0
    f64.mul
    f64.sub
    f64.mul
    f64.sub
    local.tee $5
    f64.const 0
    f64.lt
    br_if $folding-inner1
    local.get $6
    f64.neg
    local.get $5
    f64.sqrt
    local.tee $11
    f64.sub
    local.get $7
    f64.div
    local.tee $5
    local.get $3
    f64.gt
    local.get $2
    local.get $5
    f64.gt
    i32.or
    if
     local.get $11
     local.get $6
     f64.sub
     local.get $7
     f64.div
     local.tee $5
     local.get $3
     f64.gt
     local.get $2
     local.get $5
     f64.gt
     i32.or
     br_if $folding-inner1
    end
    global.get $~lib/memory/__stack_pointer
    local.tee $8
    local.get $4
    i32.store $0
    local.get $4
    local.get $5
    f64.store $0
    local.get $8
    local.get $4
    i32.store $0 offset=8
    local.get $8
    local.get $4
    i32.load $0 offset=12
    local.tee $9
    i32.store $0
    local.get $8
    local.get $1
    i32.store $0 offset=8
    local.get $8
    local.get $4
    i32.store $0 offset=12
    local.get $4
    f64.load $0
    local.set $2
    local.get $8
    i32.const 20
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner2
    global.get $~lib/memory/__stack_pointer
    local.tee $8
    i32.const 0
    i32.const 20
    memory.fill $0
    local.get $8
    local.get $1
    i32.store $0 offset=12
    local.get $8
    local.get $1
    i32.load $0 offset=24
    local.tee $8
    i32.store $0 offset=8
    local.get $8
    call $assembly/utils/Vector3/Vector3#get:clone
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0 offset=16
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.load $0 offset=28
    local.tee $10
    i32.store $0 offset=12
    local.get $10
    call $assembly/utils/Vector3/Vector3#get:clone
    local.set $10
    global.get $~lib/memory/__stack_pointer
    local.get $10
    i32.store $0 offset=8
    local.get $10
    local.get $2
    call $assembly/utils/Vector3/Vector3#multiplyScalar
    local.set $10
    global.get $~lib/memory/__stack_pointer
    local.get $10
    i32.store $0 offset=4
    local.get $8
    local.get $10
    call $assembly/utils/Vector3/Vector3#add
    local.set $8
    global.get $~lib/memory/__stack_pointer
    i32.const 20
    i32.add
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    local.get $8
    i32.store $0 offset=4
    local.get $9
    local.get $8
    call $assembly/utils/Vector3/Vector3#copy
    global.get $~lib/memory/__stack_pointer
    local.set $8
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store $0 offset=20
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.load $0 offset=12
    local.tee $9
    i32.store $0 offset=12
    local.get $9
    call $assembly/utils/Vector3/Vector3#get:clone
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $9
    i32.store $0 offset=4
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=12
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.load $0 offset=8
    local.tee $10
    i32.store $0 offset=8
    local.get $9
    local.get $10
    call $assembly/utils/Vector3/Vector3#sub
    local.set $9
    global.get $~lib/memory/__stack_pointer
    local.get $9
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=4
    local.get $8
    local.get $9
    local.get $0
    f64.load $0
    call $assembly/utils/Vector3/Vector3#divideScalar
    local.tee $0
    i32.store $0 offset=24
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0 offset=4
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=8
    global.get $~lib/memory/__stack_pointer
    i32.const 16
    i32.sub
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 2064
    i32.lt_s
    br_if $folding-inner2
    global.get $~lib/memory/__stack_pointer
    local.tee $8
    i64.const 0
    i64.store $0
    local.get $8
    i64.const 0
    i64.store $0 offset=8
    local.get $8
    local.get $4
    i32.store $0
    local.get $8
    local.get $1
    i32.store $0 offset=12
    local.get $1
    call $assembly/Ray/Ray#get:direction
    local.set $1
    global.get $~lib/memory/__stack_pointer
    local.get $1
    i32.store $0 offset=4
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=8
    local.get $4
    local.get $1
    local.get $0
    call $assembly/utils/Vector3/Vector3#dot
    f64.const 0
    f64.lt
    i32.store8 $0 offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store $0 offset=8
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.load $0 offset=16
    local.tee $1
    i32.store $0
    global.get $~lib/memory/__stack_pointer
    local.get $4
    i32.store $0 offset=8
    local.get $4
    i32.load8_u $0 offset=8
    i32.eqz
    if
     global.get $~lib/memory/__stack_pointer
     local.tee $4
     local.get $0
     i32.store $0 offset=8
     local.get $4
     i32.const 12
     i32.sub
     global.set $~lib/memory/__stack_pointer
     global.get $~lib/memory/__stack_pointer
     i32.const 2064
     i32.lt_s
     br_if $folding-inner2
     global.get $~lib/memory/__stack_pointer
     local.tee $4
     i64.const 0
     i64.store $0
     local.get $4
     i32.const 0
     i32.store $0 offset=8
     local.get $4
     local.get $0
     i32.store $0 offset=4
     local.get $4
     local.get $0
     i32.load $0
     local.tee $8
     i32.store $0
     local.get $4
     local.get $0
     i32.store $0 offset=8
     local.get $4
     local.get $0
     i32.load $0
     local.tee $4
     i32.store $0 offset=4
     local.get $8
     i32.const 0
     local.get $4
     i32.const 0
     call $~lib/staticarray/StaticArray<f64>#__get
     f64.neg
     call $~lib/staticarray/StaticArray<f64>#__set
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0 offset=4
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load $0
     local.tee $4
     i32.store $0
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0 offset=8
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load $0
     local.tee $8
     i32.store $0 offset=4
     local.get $4
     i32.const 1
     local.get $8
     i32.const 1
     call $~lib/staticarray/StaticArray<f64>#__get
     f64.neg
     call $~lib/staticarray/StaticArray<f64>#__set
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0 offset=4
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load $0
     local.tee $4
     i32.store $0
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.store $0 offset=8
     global.get $~lib/memory/__stack_pointer
     local.get $0
     i32.load $0
     local.tee $8
     i32.store $0 offset=4
     local.get $4
     i32.const 2
     local.get $8
     i32.const 2
     call $~lib/staticarray/StaticArray<f64>#__get
     f64.neg
     call $~lib/staticarray/StaticArray<f64>#__set
     global.get $~lib/memory/__stack_pointer
     i32.const 12
     i32.add
     global.set $~lib/memory/__stack_pointer
    end
    global.get $~lib/memory/__stack_pointer
    local.get $0
    i32.store $0 offset=4
    local.get $1
    local.get $0
    call $assembly/utils/Vector3/Vector3#copy
    global.get $~lib/memory/__stack_pointer
    i32.const 16
    i32.add
    global.set $~lib/memory/__stack_pointer
    global.get $~lib/memory/__stack_pointer
    i32.const 28
    i32.add
    global.set $~lib/memory/__stack_pointer
    i32.const 1
    return
   end
   global.get $~lib/memory/__stack_pointer
   i32.const 28
   i32.add
   global.set $~lib/memory/__stack_pointer
   i32.const 0
   return
  end
  i32.const 34864
  i32.const 34912
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $~lib/object/Object#constructor (param $0 i32) (result i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  global.get $~lib/memory/__stack_pointer
  i32.const 2064
  i32.lt_s
  if
   i32.const 34864
   i32.const 34912
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store $0
  local.get $0
  i32.eqz
  if
   global.get $~lib/memory/__stack_pointer
   i32.const 0
   i32.const 0
   call $~lib/rt/itcms/__new
   local.tee $0
   i32.store $0
  end
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
 (func $export:assembly/Tracer/trace (param $0 f64) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 8
  i32.sub
  global.set $~lib/memory/__stack_pointer
  block $folding-inner0
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   local.get $1
   i32.store $0
   local.get $3
   local.get $2
   i32.store $0 offset=4
   local.get $3
   i32.const 16
   i32.sub
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 2064
   i32.lt_s
   br_if $folding-inner0
   global.get $~lib/memory/__stack_pointer
   local.tee $3
   i64.const 0
   i64.store $0
   local.get $3
   i64.const 0
   i64.store $0 offset=8
   i32.const 0
   global.set $~argumentsLength
   local.get $3
   f64.const 0
   call $assembly/utils/Vector3/Vector3#constructor@varargs
   local.tee $4
   i32.store $0
   global.get $~lib/memory/__stack_pointer
   global.get $assembly/Tracer/tracer
   local.tee $3
   i32.store $0 offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store $0 offset=8
   local.get $3
   local.get $1
   call $assembly/Tracer/Tracer#createPPMImage
   global.get $~lib/memory/__stack_pointer
   local.get $2
   i32.store $0 offset=4
   global.get $~lib/memory/__stack_pointer
   local.get $1
   i32.store $0 offset=8
   global.get $~lib/memory/__stack_pointer
   local.get $4
   i32.store $0 offset=12
   i32.const 4
   global.set $~argumentsLength
   local.get $2
   local.get $1
   local.get $4
   i32.const 1
   i32.const 1248
   i32.load $0
   call_indirect $0 (type $i32_i32_i32_i32_=>_i32)
   local.set $1
   global.get $~lib/memory/__stack_pointer
   i32.const 16
   i32.add
   global.set $~lib/memory/__stack_pointer
   global.get $~lib/memory/__stack_pointer
   i32.const 8
   i32.add
   global.set $~lib/memory/__stack_pointer
   local.get $1
   return
  end
  i32.const 34864
  i32.const 34912
  i32.const 1
  i32.const 1
  call $~lib/builtins/abort
  unreachable
 )
 (func $byn-split-outlined-A$~lib/rt/itcms/__visit (param $0 i32)
  global.get $~lib/rt/itcms/white
  local.get $0
  i32.const 20
  i32.sub
  local.tee $0
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   call $~lib/rt/itcms/Object#makeGray
   global.get $~lib/rt/itcms/visitCount
   i32.const 1
   i32.add
   global.set $~lib/rt/itcms/visitCount
  end
 )
 (func $byn-split-outlined-A$~lib/rt/itcms/__link (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 1344
   i32.const 295
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/rt/itcms/white
  local.get $1
  i32.const 20
  i32.sub
  local.tee $1
  i32.load $0 offset=4
  i32.const 3
  i32.and
  i32.eq
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load $0 offset=4
   i32.const 3
   i32.and
   local.tee $3
   global.get $~lib/rt/itcms/white
   i32.eqz
   i32.eq
   if
    local.get $0
    local.get $1
    local.get $2
    select
    call $~lib/rt/itcms/Object#makeGray
   else
    global.get $~lib/rt/itcms/state
    i32.const 1
    i32.eq
    local.get $3
    i32.const 3
    i32.eq
    i32.and
    if
     local.get $1
     call $~lib/rt/itcms/Object#makeGray
    end
   end
  end
 )
)
