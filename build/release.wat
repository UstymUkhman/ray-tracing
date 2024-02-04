(module
 (type $0 (func (param i32) (result i32)))
 (type $1 (func (param i32)))
 (type $2 (func (param i32 i32 i32) (result i32)))
 (type $3 (func))
 (type $4 (func (param i32 i32) (result i32)))
 (type $5 (func (param i32 i32 i32 i32)))
 (type $6 (func (param i32 i32)))
 (type $7 (func (result i32)))
 (type $8 (func (param i32 i32 f32) (result i32)))
 (type $9 (func (param i32 i32 i64)))
 (type $10 (func (param f32 f32 f32) (result i32)))
 (type $11 (func (param f32) (result i32)))
 (type $12 (func (param i32 f32 i32 i32)))
 (type $13 (func (result f64)))
 (type $14 (func (result f32)))
 (type $15 (func (param i32 f32) (result i32)))
 (type $16 (func (param i32 i32 i32 i32) (result i32)))
 (type $17 (func (param f32 f32) (result f32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "env" "seed" (func $~lib/builtins/seed (result f64)))
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/rt/tcms/fromSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tcms/white (mut i32) (i32.const 0))
 (global $~lib/rt/tcms/total (mut i32) (i32.const 0))
 (global $assembly/hittables/index/Record (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/math/random_seeded (mut i32) (i32.const 0))
 (global $~lib/math/random_state0_32 (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_32 (mut i32) (i32.const 0))
 (global $assembly/Tracer/tracer (mut i32) (i32.const 0))
 (global $~lib/rt/tcms/pinSpace (mut i32) (i32.const 0))
 (global $~lib/rt/tcms/toSpace (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 2656))
 (memory $0 1)
 (data $0 (i32.const 1036) "\1c")
 (data $0.1 (i32.const 1048) "\06\00\00\00\08\00\00\00\01")
 (data $1 (i32.const 1068) "<")
 (data $1.1 (i32.const 1080) "\02\00\00\00(\00\00\00A\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data $2 (i32.const 1132) "<")
 (data $2.1 (i32.const 1144) "\02\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00c\00m\00s\00.\00t\00s")
 (data $3 (i32.const 1196) "<")
 (data $3.1 (i32.const 1208) "\02\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data $5 (i32.const 1292) ",")
 (data $5.1 (i32.const 1304) "\01\00\00\00\18")
 (data $5.2 (i32.const 1318) "*@\00\00\00\00\00\00\00@\00\00\00\00\00\00\08@")
 (data $6 (i32.const 1340) ",")
 (data $6.1 (i32.const 1352) "\t\00\00\00\10\00\00\00 \05\00\00 \05\00\00\18\00\00\00\03")
 (data $7 (i32.const 1388) ",")
 (data $7.1 (i32.const 1400) "\01\00\00\00\18")
 (data $8 (i32.const 1436) ",")
 (data $8.1 (i32.const 1448) "\t\00\00\00\10\00\00\00\80\05\00\00\80\05\00\00\18\00\00\00\03")
 (data $9 (i32.const 1484) ",")
 (data $9.1 (i32.const 1496) "\01\00\00\00\18")
 (data $9.2 (i32.const 1518) "\f0?")
 (data $10 (i32.const 1532) ",")
 (data $10.1 (i32.const 1544) "\t\00\00\00\10\00\00\00\e0\05\00\00\e0\05\00\00\18\00\00\00\03")
 (data $11 (i32.const 1580) ",")
 (data $11.1 (i32.const 1592) "\02\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data $12 (i32.const 1628) "<")
 (data $12.1 (i32.const 1640) "\02\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s")
 (data $13 (i32.const 1696) ")\15DNn\83\f9\a2\c0\dd4\f5\d1W\'\fcA\90C<\99\95b\dba\c5\bb\de\abcQ\fe")
 (data $14 (i32.const 1740) "|")
 (data $14.1 (i32.const 1752) "\02\00\00\00^\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00n\00u\00l\00l\00\'\00 \00(\00n\00o\00t\00 \00a\00s\00s\00i\00g\00n\00e\00d\00 \00o\00r\00 \00f\00a\00i\00l\00e\00d\00 \00c\00a\00s\00t\00)")
 (data $15 (i32.const 1868) "L")
 (data $15.1 (i32.const 1880) "\02\00\00\008\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00h\00i\00t\00t\00a\00b\00l\00e\00s\00/\00R\00e\00c\00o\00r\00d\00.\00t\00s")
 (data $16 (i32.const 1948) "<")
 (data $16.1 (i32.const 1960) "\02\00\00\00*\00\00\00O\00b\00j\00e\00c\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00p\00i\00n\00n\00e\00d")
 (data $18 (i32.const 2044) "<")
 (data $18.1 (i32.const 2056) "\02\00\00\00(\00\00\00O\00b\00j\00e\00c\00t\00 \00i\00s\00 \00n\00o\00t\00 \00p\00i\00n\00n\00e\00d")
 (data $20 (i32.const 2136) "\be\f3\f8y\eca\f6?\190\96[\c6\fe\de\bf=\88\afJ\edq\f5?\a4\fc\d42h\0b\db\bf\b0\10\f0\f09\95\f4?{\b7\1f\n\8bA\d7\bf\85\03\b8\b0\95\c9\f3?{\cfm\1a\e9\9d\d3\bf\a5d\88\0c\19\r\f3?1\b6\f2\f3\9b\1d\d0\bf\a0\8e\0b{\"^\f2?\f0z;\1b\1d|\c9\bf?4\1aJJ\bb\f1?\9f<\af\93\e3\f9\c2\bf\ba\e5\8a\f0X#\f1?\\\8dx\bf\cb`\b9\bf\a7\00\99A?\95\f0?\ce_G\b6\9do\aa\bf\00\00\00\00\00\00\f0?\00\00\00\00\00\00\00\00\acG\9a\fd\8c`\ee?=\f5$\9f\ca8\b3?\a0j\02\1f\b3\a4\ec?\ba\918T\a9v\c4?\e6\fcjW6 \eb?\d2\e4\c4J\0b\84\ce?-\aa\a1c\d1\c2\e9?\1ce\c6\f0E\06\d4?\edAx\03\e6\86\e8?\f8\9f\1b,\9c\8e\d8?bHS\f5\dcg\e7?\cc{\b1N\a4\e0\dc?")
 (data $21 (i32.const 2398) "\f0?t\85\15\d3\b0\d9\ef?\0f\89\f9lX\b5\ef?Q[\12\d0\01\93\ef?{Q}<\b8r\ef?\aa\b9h1\87T\ef?8bunz8\ef?\e1\de\1f\f5\9d\1e\ef?\15\b71\n\fe\06\ef?\cb\a9:7\a7\f1\ee?\"4\12L\a6\de\ee?-\89a`\08\ce\ee?\'*6\d5\da\bf\ee?\82O\9dV+\b4\ee?)TH\dd\07\ab\ee?\85U:\b0~\a4\ee?\cd;\7ff\9e\a0\ee?t_\ec\e8u\9f\ee?\87\01\ebs\14\a1\ee?\13\ceL\99\89\a5\ee?\db\a0*B\e5\ac\ee?\e5\c5\cd\b07\b7\ee?\90\f0\a3\82\91\c4\ee?]%>\b2\03\d5\ee?\ad\d3Z\99\9f\e8\ee?G^\fb\f2v\ff\ee?\9cR\85\dd\9b\19\ef?i\90\ef\dc 7\ef?\87\a4\fb\dc\18X\ef?_\9b{3\97|\ef?\da\90\a4\a2\af\a4\ef?@En[v\d0\ef?")
 (data $22 (i32.const 2656) "\16\00\00\00 \00\00\00 \00\00\00 \00\00\00\00\00\00\00$\19\00\00d")
 (data $22.1 (i32.const 2692) " \00\00\00\02\1a")
 (data $22.2 (i32.const 2712) " \00\00\00\04A\00\00 ")
 (data $22.3 (i32.const 2740) " ")
 (table $0 2 2 funcref)
 (elem $0 (i32.const 1) $start:assembly/utils/Color~anonymous|0)
 (export "trace" (func $assembly/Tracer/trace))
 (export "format" (func $assembly/Tracer/format))
 (export "__new" (func $~lib/rt/tcms/__new))
 (export "__pin" (func $~lib/rt/tcms/__pin))
 (export "__unpin" (func $~lib/rt/tcms/__unpin))
 (export "__collect" (func $~lib/rt/tcms/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "memory" (memory $0))
 (start $~start)
 (func $start:assembly/utils/Color~anonymous|0 (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 f32)
  (local $5 i32)
  (local $6 i32)
  (local $7 f32)
  (local $8 i32)
  (local $9 f32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 2
  i32.shr_u
  local.set $5
  loop $for-loop|0
   local.get $3
   local.get $5
   i32.lt_s
   if
    local.get $0
    local.get $3
    i32.const 1
    i32.add
    local.tee $6
    i32.const 2
    i32.shl
    i32.add
    f32.load
    local.get $2
    f32.convert_i32_u
    local.tee $4
    f32.div
    f32.sqrt
    f32.const 256
    f32.mul
    f32.const 255
    f32.min
    f32.const 0
    f32.max
    local.set $7
    local.get $0
    local.get $3
    i32.const 2
    i32.add
    local.tee $8
    i32.const 2
    i32.shl
    i32.add
    f32.load
    local.get $4
    f32.div
    f32.sqrt
    f32.const 256
    f32.mul
    f32.const 255
    f32.min
    f32.const 0
    f32.max
    local.set $9
    local.get $1
    local.get $3
    i32.add
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    f32.load
    local.get $4
    f32.div
    f32.sqrt
    f32.const 256
    f32.mul
    f32.const 255
    f32.min
    f32.const 0
    f32.max
    i32.trunc_sat_f32_u
    i32.store8
    local.get $1
    local.get $6
    i32.add
    local.get $7
    i32.trunc_sat_f32_u
    i32.store8
    local.get $1
    local.get $8
    i32.add
    local.get $9
    i32.trunc_sat_f32_u
    i32.store8
    local.get $3
    i32.const 3
    i32.add
    local.set $3
    br $for-loop|0
   end
  end
  local.get $1
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  i32.const -4
  i32.and
  local.tee $3
  i32.const 256
  i32.lt_u
  if (result i32)
   local.get $3
   i32.const 4
   i32.shr_u
  else
   i32.const 31
   i32.const 1073741820
   local.get $3
   local.get $3
   i32.const 1073741820
   i32.ge_u
   select
   local.tee $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 7
   i32.sub
   local.set $2
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
  end
  local.set $4
  local.get $1
  i32.load offset=8
  local.set $5
  local.get $1
  i32.load offset=4
  local.tee $3
  if
   local.get $3
   local.get $5
   i32.store offset=8
  end
  local.get $5
  if
   local.get $5
   local.get $3
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  i32.const 4
  i32.shl
  local.get $4
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.tee $1
  i32.load offset=96
  i32.eq
  if
   local.get $1
   local.get $5
   i32.store offset=96
   local.get $5
   i32.eqz
   if
    local.get $0
    local.get $2
    i32.const 2
    i32.shl
    i32.add
    local.tee $1
    i32.load offset=4
    i32.const -2
    local.get $4
    i32.rotl
    i32.and
    local.set $3
    local.get $1
    local.get $3
    i32.store offset=4
    local.get $3
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $2
     i32.rotl
     i32.and
     i32.store
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
  i32.const 4
  i32.add
  local.tee $6
  local.get $1
  i32.load
  local.tee $3
  i32.const -4
  i32.and
  i32.add
  local.tee $4
  i32.load
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
   i32.store
   local.get $6
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   i32.load
   local.set $2
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $1
   i32.load
   local.set $6
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
   i32.store
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $0
  local.get $3
  i32.const -4
  i32.and
  local.tee $2
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
  local.get $5
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $3
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $3
  i32.store offset=8
  local.get $3
  if
   local.get $3
   local.get $1
   i32.store offset=4
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
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $5
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $5
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $2
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.load offset=1568
  local.tee $3
  if
   local.get $1
   i32.const 16
   i32.sub
   local.tee $5
   local.get $3
   i32.eq
   if
    local.get $3
    i32.load
    local.set $4
    local.get $5
    local.set $1
   end
  end
  local.get $2
  i32.wrap_i64
  i32.const -16
  i32.and
  local.get $1
  i32.sub
  local.tee $3
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $3
  i32.const 8
  i32.sub
  local.tee $3
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 4
  i32.add
  local.get $3
  i32.add
  local.tee $3
  i32.const 2
  i32.store
  local.get $0
  local.get $3
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 0
  i32.le_s
  if (result i32)
   i32.const 1
   local.get $0
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 2752
  i32.const 0
  i32.store
  i32.const 4320
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 2752
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $1
      i32.const 4
      i32.shl
      local.get $0
      i32.add
      i32.const 2
      i32.shl
      i32.const 2752
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 2752
  i32.const 4324
  memory.size
  i64.extend_i32_s
  i64.const 16
  i64.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 2752
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   local.get $1
   i32.const 536870910
   i32.lt_u
   if
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
    local.set $1
   end
   local.get $1
   i32.const 31
   local.get $1
   i32.clz
   i32.sub
   local.tee $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
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
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $0
    local.get $1
    i32.ctz
    local.tee $0
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    i32.ctz
    local.get $0
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tcms/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 1073741804
  i32.gt_u
  if
   i32.const 1088
   i32.const 1152
   i32.const 125
   i32.const 30
   call $~lib/builtins/abort
   unreachable
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
   i32.const 1088
   i32.const 1216
   i32.const 461
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  local.get $2
  i32.const 12
  i32.le_u
  if (result i32)
   i32.const 12
  else
   local.get $2
   i32.const 19
   i32.add
   i32.const -16
   i32.and
   i32.const 4
   i32.sub
  end
  local.tee $5
  call $~lib/rt/tlsf/searchBlock
  local.tee $2
  i32.eqz
  if
   memory.size
   local.tee $2
   local.get $5
   i32.const 256
   i32.ge_u
   if (result i32)
    local.get $5
    i32.const 536870910
    i32.lt_u
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
    else
     local.get $5
    end
   else
    local.get $5
   end
   i32.const 4
   local.get $4
   i32.load offset=1568
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
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
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
   memory.size
   i64.extend_i32_s
   i64.const 16
   i64.shl
   call $~lib/rt/tlsf/addMemory
   local.get $4
   local.get $5
   call $~lib/rt/tlsf/searchBlock
   local.set $2
  end
  local.get $2
  i32.load
  drop
  local.get $4
  local.get $2
  call $~lib/rt/tlsf/removeBlock
  local.get $2
  i32.load
  local.tee $3
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
   i32.store
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
   i32.store
   local.get $4
   local.get $3
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $2
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $2
   i32.const 4
   i32.add
   local.get $2
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   local.get $3
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  global.get $~lib/rt/tcms/fromSpace
  local.tee $0
  i32.load offset=8
  local.set $1
  local.get $2
  local.get $0
  global.get $~lib/rt/tcms/white
  i32.or
  i32.store offset=4
  local.get $2
  local.get $1
  i32.store offset=8
  local.get $1
  local.get $2
  local.get $1
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
  local.get $0
  local.get $2
  i32.store offset=8
  global.get $~lib/rt/tcms/total
  local.get $2
  i32.load
  i32.const -4
  i32.and
  i32.const 4
  i32.add
  i32.add
  global.set $~lib/rt/tcms/total
  local.get $2
  i32.const 20
  i32.add
 )
 (func $assembly/utils/Vector3/Vector3#constructor (param $0 f32) (param $1 f32) (param $2 f32) (result i32)
  (local $3 i32)
  i32.const 12
  i32.const 15
  call $~lib/rt/tcms/__new
  local.tee $3
  local.get $0
  f32.store
  local.get $3
  local.get $1
  f32.store offset=4
  local.get $3
  local.get $2
  f32.store offset=8
  local.get $3
 )
 (func $assembly/materials/Material/Material#constructor (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 8
   call $~lib/rt/tcms/__new
   local.set $0
  end
  local.get $0
  if (result i32)
   local.get $0
  else
   i32.const 0
   i32.const 0
   call $~lib/rt/tcms/__new
  end
 )
 (func $assembly/materials/Lambertian/Lambertian#constructor (param $0 i32) (result i32)
  (local $1 i32)
  i32.const 4
  i32.const 17
  call $~lib/rt/tcms/__new
  local.tee $1
  i32.const 0
  i32.store
  local.get $1
  call $assembly/materials/Material/Material#constructor
  local.tee $1
  local.get $0
  f32.load
  local.get $0
  f32.load offset=4
  local.get $0
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  i32.store
  local.get $1
 )
 (func $assembly/utils/Vector3/Vector3#constructor@varargs (param $0 f32) (result i32)
  (local $1 f32)
  (local $2 f32)
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
     f32.const 0
     local.set $0
    end
    local.get $0
    local.set $1
   end
   local.get $0
   local.set $2
  end
  local.get $0
  local.get $1
  local.get $2
  call $assembly/utils/Vector3/Vector3#constructor
 )
 (func $assembly/hittables/Hittable/Hittable#constructor (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 13
   call $~lib/rt/tcms/__new
   local.set $0
  end
  local.get $0
  if (result i32)
   local.get $0
  else
   i32.const 0
   i32.const 0
   call $~lib/rt/tcms/__new
  end
 )
 (func $assembly/hittables/World/World#addSphere (param $0 i32) (param $1 f32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.load
  local.set $4
  i32.const 12
  i32.const 18
  call $~lib/rt/tcms/__new
  local.tee $5
  local.get $1
  f32.store
  local.get $5
  local.get $2
  i32.store offset=4
  local.get $5
  local.get $3
  i32.store offset=8
  local.get $5
  call $assembly/hittables/Hittable/Hittable#constructor
  local.set $2
  local.get $0
  local.get $0
  i32.load16_u offset=8
  local.tee $0
  i32.const 1
  i32.add
  local.tee $3
  i32.store16 offset=8
  local.get $4
  i32.load
  local.get $0
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
  local.get $4
  local.get $3
  i32.store16 offset=4
 )
 (func $~lib/math/NativeMathf.random (result f32)
  (local $0 i32)
  (local $1 i64)
  (local $2 i32)
  global.get $~lib/math/random_seeded
  i32.eqz
  if
   i64.const -7046029254386353131
   call $~lib/builtins/seed
   i64.reinterpret_f64
   local.tee $1
   local.get $1
   i64.eqz
   select
   i32.wrap_i64
   i32.const 1831565813
   i32.add
   local.tee $0
   i32.const 1
   i32.or
   local.get $0
   local.get $0
   i32.const 15
   i32.shr_u
   i32.xor
   i32.mul
   local.tee $0
   local.get $0
   local.get $0
   i32.const 61
   i32.or
   local.get $0
   local.get $0
   i32.const 7
   i32.shr_u
   i32.xor
   i32.mul
   i32.add
   i32.xor
   local.tee $0
   local.get $0
   i32.const 14
   i32.shr_u
   i32.xor
   global.set $~lib/math/random_state0_32
   global.get $~lib/math/random_state0_32
   i32.const 1831565813
   i32.add
   local.tee $0
   i32.const 1
   i32.or
   local.get $0
   local.get $0
   i32.const 15
   i32.shr_u
   i32.xor
   i32.mul
   local.tee $0
   local.get $0
   local.get $0
   i32.const 61
   i32.or
   local.get $0
   local.get $0
   i32.const 7
   i32.shr_u
   i32.xor
   i32.mul
   i32.add
   i32.xor
   local.tee $0
   local.get $0
   i32.const 14
   i32.shr_u
   i32.xor
   global.set $~lib/math/random_state1_32
   i32.const 1
   global.set $~lib/math/random_seeded
  end
  global.get $~lib/math/random_state0_32
  local.tee $0
  global.get $~lib/math/random_state1_32
  i32.xor
  local.tee $2
  local.get $0
  i32.const 26
  i32.rotl
  i32.xor
  local.get $2
  i32.const 9
  i32.shl
  i32.xor
  global.set $~lib/math/random_state0_32
  local.get $2
  i32.const 13
  i32.rotl
  global.set $~lib/math/random_state1_32
  local.get $0
  i32.const -1640531525
  i32.mul
  i32.const 5
  i32.rotl
  i32.const 5
  i32.mul
  i32.const 9
  i32.shr_u
  i32.const 1065353216
  i32.or
  f32.reinterpret_i32
  f32.const -1
  f32.add
 )
 (func $assembly/materials/Metal/Metal#constructor (param $0 i32) (param $1 f32) (result i32)
  (local $2 i32)
  i32.const 8
  i32.const 19
  call $~lib/rt/tcms/__new
  local.tee $2
  f32.const 0
  f32.store
  local.get $2
  i32.const 0
  i32.store offset=4
  local.get $2
  call $assembly/materials/Material/Material#constructor
  local.tee $2
  local.get $0
  f32.load
  local.get $0
  f32.load offset=4
  local.get $0
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  i32.store offset=4
  local.get $2
  local.get $1
  f32.const 1
  f32.min
  f32.store
  local.get $2
 )
 (func $assembly/hittables/World/World#generateSmallSpheres (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 f32)
  (local $5 i32)
  (local $6 i32)
  i32.const -11
  local.set $2
  loop $for-loop|0
   local.get $2
   i32.const 11
   i32.lt_s
   if
    i32.const -11
    local.set $3
    loop $for-loop|1
     local.get $3
     i32.const 11
     i32.lt_s
     if
      call $~lib/math/NativeMathf.random
      f32.const 0.8999999761581421
      f32.mul
      local.get $2
      f32.convert_i32_s
      f32.add
      f32.const 0.20000000298023224
      call $~lib/math/NativeMathf.random
      f32.const 0.8999999761581421
      f32.mul
      local.get $3
      f32.convert_i32_s
      f32.add
      call $assembly/utils/Vector3/Vector3#constructor
      local.set $1
      f32.const 4
      f32.const 0.20000000298023224
      f32.const 0
      call $assembly/utils/Vector3/Vector3#constructor
      local.set $5
      local.get $1
      f32.load
      local.get $1
      f32.load offset=4
      local.get $1
      f32.load offset=8
      call $assembly/utils/Vector3/Vector3#constructor
      local.tee $6
      local.get $6
      f32.load
      local.get $5
      f32.load
      f32.sub
      f32.store
      local.get $6
      local.get $6
      f32.load offset=4
      local.get $5
      f32.load offset=4
      f32.sub
      f32.store offset=4
      local.get $6
      local.get $6
      f32.load offset=8
      local.get $5
      f32.load offset=8
      f32.sub
      f32.store offset=8
      local.get $6
      f32.load
      local.get $6
      f32.load
      f32.mul
      local.get $6
      f32.load offset=4
      local.get $6
      f32.load offset=4
      f32.mul
      f32.add
      local.get $6
      f32.load offset=8
      local.get $6
      f32.load offset=8
      f32.mul
      f32.add
      f32.sqrt
      f32.const 0.8999999761581421
      f32.gt
      if
       call $~lib/math/NativeMathf.random
       local.tee $4
       f32.const 0.800000011920929
       f32.lt
       if
        local.get $0
        i32.load offset=4
        local.tee $5
        call $~lib/math/NativeMathf.random
        f32.const 0
        f32.add
        f32.store
        local.get $5
        call $~lib/math/NativeMathf.random
        f32.const 0
        f32.add
        f32.store offset=4
        local.get $5
        call $~lib/math/NativeMathf.random
        f32.const 0
        f32.add
        f32.store offset=8
        local.get $0
        i32.load offset=4
        local.tee $6
        call $~lib/math/NativeMathf.random
        f32.const 0
        f32.add
        f32.store
        local.get $6
        call $~lib/math/NativeMathf.random
        f32.const 0
        f32.add
        f32.store offset=4
        local.get $6
        call $~lib/math/NativeMathf.random
        f32.const 0
        f32.add
        f32.store offset=8
        local.get $5
        local.get $5
        f32.load
        local.get $6
        f32.load
        f32.mul
        f32.store
        local.get $5
        local.get $5
        f32.load offset=4
        local.get $6
        f32.load offset=4
        f32.mul
        f32.store offset=4
        local.get $5
        local.get $5
        f32.load offset=8
        local.get $6
        f32.load offset=8
        f32.mul
        f32.store offset=8
        local.get $0
        f32.const 0.20000000298023224
        local.get $1
        local.get $0
        i32.load offset=4
        call $assembly/materials/Lambertian/Lambertian#constructor
        call $assembly/hittables/World/World#addSphere
       else
        local.get $4
        f32.const 0.949999988079071
        f32.lt
        if
         local.get $0
         i32.load offset=4
         local.tee $5
         call $~lib/math/NativeMathf.random
         f32.const 0.5
         f32.mul
         f32.const 0.5
         f32.add
         f32.store
         local.get $5
         call $~lib/math/NativeMathf.random
         f32.const 0.5
         f32.mul
         f32.const 0.5
         f32.add
         f32.store offset=4
         local.get $5
         call $~lib/math/NativeMathf.random
         f32.const 0.5
         f32.mul
         f32.const 0.5
         f32.add
         f32.store offset=8
         call $~lib/math/NativeMathf.random
         f32.const 0.5
         f32.mul
         f32.const 0
         f32.add
         local.set $4
         local.get $0
         f32.const 0.20000000298023224
         local.get $1
         local.get $0
         i32.load offset=4
         local.get $4
         call $assembly/materials/Metal/Metal#constructor
         call $assembly/hittables/World/World#addSphere
        else
         i32.const 4
         i32.const 20
         call $~lib/rt/tcms/__new
         local.tee $5
         f32.const 1.5
         f32.store
         local.get $0
         f32.const 0.20000000298023224
         local.get $1
         local.get $5
         call $assembly/materials/Material/Material#constructor
         call $assembly/hittables/World/World#addSphere
        end
       end
      end
      local.get $3
      i32.const 1
      i32.add
      local.set $3
      br $for-loop|1
     end
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
 )
 (func $assembly/Camera/Camera#constructor (result i32)
  (local $0 i32)
  (local $1 f32)
  (local $2 i32)
  (local $3 i32)
  (local $4 f32)
  (local $5 i32)
  (local $6 f32)
  (local $7 f32)
  (local $8 i32)
  (local $9 f32)
  (local $10 f32)
  i32.const 28
  i32.const 16
  call $~lib/rt/tcms/__new
  local.set $0
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  i32.store
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  i32.store offset=4
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  i32.store offset=8
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  i32.store offset=12
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  i32.store offset=16
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  i32.store offset=20
  local.get $0
  f32.const 0
  f32.store offset=24
  i32.const 1364
  i32.load
  local.tee $2
  f64.load
  f32.demote_f64
  local.get $2
  f64.load offset=8
  f32.demote_f64
  local.get $2
  f64.load offset=16
  f32.demote_f64
  call $assembly/utils/Vector3/Vector3#constructor
  local.tee $5
  f32.load
  local.get $5
  f32.load offset=4
  local.get $5
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $2
  i32.const 1460
  i32.load
  local.tee $3
  f64.load
  f32.demote_f64
  local.get $3
  f64.load offset=8
  f32.demote_f64
  local.get $3
  f64.load offset=16
  f32.demote_f64
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $3
  local.get $2
  local.get $2
  f32.load
  local.get $3
  f32.load
  f32.sub
  f32.store
  local.get $2
  local.get $2
  f32.load offset=4
  local.get $3
  f32.load offset=4
  f32.sub
  f32.store offset=4
  local.get $2
  local.get $2
  f32.load offset=8
  local.get $3
  f32.load offset=8
  f32.sub
  f32.store offset=8
  local.get $2
  local.get $2
  f32.load
  f32.const 1
  local.get $2
  f32.load
  local.get $2
  f32.load
  f32.mul
  local.get $2
  f32.load offset=4
  local.get $2
  f32.load offset=4
  f32.mul
  f32.add
  local.get $2
  f32.load offset=8
  local.get $2
  f32.load offset=8
  f32.mul
  f32.add
  f32.sqrt
  f32.div
  local.tee $1
  f32.mul
  f32.store
  local.get $2
  local.get $2
  f32.load offset=4
  local.get $1
  f32.mul
  f32.store offset=4
  local.get $2
  local.get $2
  f32.load offset=8
  local.get $1
  f32.mul
  f32.store offset=8
  i32.const 1556
  i32.load
  local.tee $3
  f64.load
  f32.demote_f64
  local.get $3
  f64.load offset=8
  f32.demote_f64
  local.get $3
  f64.load offset=16
  f32.demote_f64
  call $assembly/utils/Vector3/Vector3#constructor
  local.tee $3
  f32.load
  local.set $1
  local.get $3
  f32.load offset=8
  local.tee $4
  local.get $2
  f32.load
  f32.mul
  local.get $1
  local.get $2
  f32.load offset=8
  f32.mul
  f32.sub
  local.set $6
  local.get $1
  local.get $2
  f32.load offset=4
  f32.mul
  local.get $3
  f32.load offset=4
  local.tee $1
  local.get $2
  f32.load
  f32.mul
  f32.sub
  local.set $7
  local.get $3
  local.get $1
  local.get $2
  f32.load offset=8
  f32.mul
  local.get $4
  local.get $2
  f32.load offset=4
  f32.mul
  f32.sub
  f32.store
  local.get $3
  local.get $6
  f32.store offset=4
  local.get $3
  local.get $7
  f32.store offset=8
  f32.const 1
  local.get $3
  f32.load
  local.tee $1
  local.get $1
  f32.mul
  local.get $3
  f32.load offset=4
  local.get $3
  f32.load offset=4
  f32.mul
  f32.add
  local.get $3
  f32.load offset=8
  local.get $3
  f32.load offset=8
  f32.mul
  f32.add
  f32.sqrt
  f32.div
  local.set $4
  local.get $3
  local.get $1
  local.get $4
  f32.mul
  f32.store
  local.get $3
  local.get $3
  f32.load offset=4
  local.get $4
  f32.mul
  f32.store offset=4
  local.get $3
  local.get $3
  f32.load offset=8
  local.get $4
  f32.mul
  f32.store offset=8
  local.get $0
  local.get $3
  i32.store offset=16
  local.get $2
  f32.load
  local.get $2
  f32.load offset=4
  local.get $2
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $3
  local.get $0
  i32.load offset=16
  local.tee $8
  f32.load offset=8
  local.set $6
  local.get $8
  f32.load
  local.set $7
  local.get $3
  f32.load
  local.set $1
  local.get $3
  local.get $3
  f32.load offset=4
  local.tee $4
  local.get $6
  f32.mul
  local.get $3
  f32.load offset=8
  local.tee $9
  local.get $8
  f32.load offset=4
  local.tee $10
  f32.mul
  f32.sub
  f32.store
  local.get $3
  local.get $9
  local.get $7
  f32.mul
  local.get $1
  local.get $6
  f32.mul
  f32.sub
  f32.store offset=4
  local.get $3
  local.get $1
  local.get $10
  f32.mul
  local.get $4
  local.get $7
  f32.mul
  f32.sub
  f32.store offset=8
  local.get $0
  local.get $3
  i32.store offset=20
  local.get $0
  local.get $5
  i32.store offset=12
  local.get $0
  f32.const 0.05000000074505806
  f32.store offset=24
  local.get $0
  i32.load offset=16
  local.tee $3
  f32.load
  local.get $3
  f32.load offset=4
  local.get $3
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  local.tee $3
  local.get $3
  f32.load
  f32.const 0.5289809703826904
  f32.mul
  f32.store
  local.get $3
  local.get $3
  f32.load offset=4
  f32.const 0.5289809703826904
  f32.mul
  f32.store offset=4
  local.get $3
  local.get $3
  f32.load offset=8
  f32.const 0.5289809703826904
  f32.mul
  f32.store offset=8
  local.get $3
  local.get $3
  f32.load
  f32.const 10
  f32.mul
  f32.store
  local.get $3
  local.get $3
  f32.load offset=4
  f32.const 10
  f32.mul
  f32.store offset=4
  local.get $3
  local.get $3
  f32.load offset=8
  f32.const 10
  f32.mul
  f32.store offset=8
  local.get $0
  local.get $3
  i32.store offset=4
  local.get $0
  i32.load offset=20
  local.tee $3
  f32.load
  local.get $3
  f32.load offset=4
  local.get $3
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  local.tee $3
  local.get $3
  f32.load
  f32.const 0.35265398025512695
  f32.mul
  f32.store
  local.get $3
  local.get $3
  f32.load offset=4
  f32.const 0.35265398025512695
  f32.mul
  f32.store offset=4
  local.get $3
  local.get $3
  f32.load offset=8
  f32.const 0.35265398025512695
  f32.mul
  f32.store offset=8
  local.get $3
  local.get $3
  f32.load
  f32.const 10
  f32.mul
  f32.store
  local.get $3
  local.get $3
  f32.load offset=4
  f32.const 10
  f32.mul
  f32.store offset=4
  local.get $3
  local.get $3
  f32.load offset=8
  f32.const 10
  f32.mul
  f32.store offset=8
  local.get $0
  local.get $3
  i32.store offset=8
  local.get $0
  i32.load offset=12
  local.tee $3
  f32.load
  local.get $3
  f32.load offset=4
  local.get $3
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $3
  local.get $0
  i32.load offset=4
  local.tee $5
  f32.load
  local.get $5
  f32.load offset=4
  local.get $5
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  local.tee $5
  local.get $5
  f32.load
  f32.const 0.5
  f32.mul
  f32.store
  local.get $5
  local.get $5
  f32.load offset=4
  f32.const 0.5
  f32.mul
  f32.store offset=4
  local.get $5
  local.get $5
  f32.load offset=8
  f32.const 0.5
  f32.mul
  f32.store offset=8
  local.get $3
  local.get $3
  f32.load
  local.get $5
  f32.load
  f32.sub
  f32.store
  local.get $3
  local.get $3
  f32.load offset=4
  local.get $5
  f32.load offset=4
  f32.sub
  f32.store offset=4
  local.get $3
  local.get $3
  f32.load offset=8
  local.get $5
  f32.load offset=8
  f32.sub
  f32.store offset=8
  local.get $0
  i32.load offset=8
  local.tee $5
  f32.load
  local.get $5
  f32.load offset=4
  local.get $5
  f32.load offset=8
  call $assembly/utils/Vector3/Vector3#constructor
  local.tee $5
  local.get $5
  f32.load
  f32.const 0.5
  f32.mul
  f32.store
  local.get $5
  local.get $5
  f32.load offset=4
  f32.const 0.5
  f32.mul
  f32.store offset=4
  local.get $5
  local.get $5
  f32.load offset=8
  f32.const 0.5
  f32.mul
  f32.store offset=8
  local.get $3
  local.get $3
  f32.load
  local.get $5
  f32.load
  f32.sub
  f32.store
  local.get $3
  local.get $3
  f32.load offset=4
  local.get $5
  f32.load offset=4
  f32.sub
  f32.store offset=4
  local.get $3
  local.get $3
  f32.load offset=8
  local.get $5
  f32.load offset=8
  f32.sub
  f32.store offset=8
  local.get $2
  local.get $2
  f32.load
  f32.const 10
  f32.mul
  f32.store
  local.get $2
  local.get $2
  f32.load offset=4
  f32.const 10
  f32.mul
  f32.store offset=4
  local.get $2
  local.get $2
  f32.load offset=8
  f32.const 10
  f32.mul
  f32.store offset=8
  local.get $3
  local.get $3
  f32.load
  local.get $2
  f32.load
  f32.sub
  f32.store
  local.get $3
  local.get $3
  f32.load offset=4
  local.get $2
  f32.load offset=4
  f32.sub
  f32.store offset=4
  local.get $3
  local.get $3
  f32.load offset=8
  local.get $2
  f32.load offset=8
  f32.sub
  f32.store offset=8
  local.get $0
  local.get $3
  i32.store
  local.get $0
 )
 (func $assembly/Ray/Ray#constructor (result i32)
  (local $0 i32)
  i32.const 28
  i32.const 21
  call $~lib/rt/tcms/__new
  local.tee $0
  i32.eqz
  if
   i32.const 0
   i32.const 0
   call $~lib/rt/tcms/__new
   local.set $0
  end
  i32.const 1
  global.set $~argumentsLength
  local.get $0
  f32.const 1
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  i32.store
  local.get $0
  f32.const 0
  f32.store offset=4
  local.get $0
  f32.const 0
  f32.store offset=8
  local.get $0
  f32.const 0
  f32.store offset=12
  local.get $0
  f32.const 0
  f32.store offset=16
  local.get $0
  f32.const 0
  f32.store offset=20
  local.get $0
  f32.const 0
  f32.store offset=24
  local.get $0
 )
 (func $assembly/Ray/Ray#getColor (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 f32)
  (local $5 f32)
  (local $6 f32)
  (local $7 f32)
  (local $8 f32)
  (local $9 f32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  (local $13 f32)
  block $folding-inner0
   local.get $3
   i32.const 255
   i32.and
   i32.eqz
   br_if $folding-inner0
   local.get $2
   local.get $1
   f32.const inf
   call $assembly/hittables/Hittable/Hittable#hit@override
   if
    i32.const 0
    global.set $~argumentsLength
    f32.const 0
    call $assembly/utils/Vector3/Vector3#constructor@varargs
    local.set $11
    call $assembly/Ray/Ray#constructor
    local.set $10
    global.get $assembly/hittables/index/Record
    i32.load offset=4
    local.tee $12
    i32.eqz
    if
     i32.const 1760
     i32.const 1888
     i32.const 7
     i32.const 10
     call $~lib/builtins/abort
     unreachable
    end
    block $__inlined_func$assembly/materials/Material/Material#scatter@override$321
     block $default
      block $case2
       block $case1
        block $case0
         local.get $12
         i32.const 8
         i32.sub
         i32.load
         i32.const 17
         i32.sub
         br_table $case1 $default $case0 $case2 $default
        end
        local.get $1
        f32.load offset=16
        local.tee $4
        local.get $4
        f32.mul
        local.get $1
        f32.load offset=20
        local.tee $5
        local.get $5
        f32.mul
        f32.add
        local.get $1
        f32.load offset=24
        local.tee $6
        local.get $6
        f32.mul
        f32.add
        f32.sqrt
        local.set $7
        local.get $4
        local.get $7
        f32.div
        local.tee $4
        global.get $assembly/hittables/index/Record
        local.tee $1
        f32.load offset=8
        local.tee $8
        local.get $4
        local.get $8
        f32.mul
        local.get $5
        local.get $7
        f32.div
        local.tee $4
        local.get $1
        f32.load offset=12
        local.tee $5
        f32.mul
        f32.add
        local.get $6
        local.get $7
        f32.div
        local.tee $6
        local.get $1
        f32.load offset=16
        local.tee $7
        f32.mul
        f32.add
        f32.const 2
        f32.mul
        local.tee $8
        f32.mul
        f32.sub
        local.set $9
        local.get $4
        local.get $5
        local.get $8
        f32.mul
        f32.sub
        local.set $4
        local.get $6
        local.get $7
        local.get $8
        f32.mul
        f32.sub
        local.set $5
        loop $do-loop|0
         call $~lib/math/NativeMathf.random
         f32.const 2
         f32.mul
         f32.const -1
         f32.add
         local.tee $6
         local.get $6
         f32.mul
         call $~lib/math/NativeMathf.random
         f32.const 2
         f32.mul
         f32.const -1
         f32.add
         local.tee $7
         local.get $7
         f32.mul
         f32.add
         call $~lib/math/NativeMathf.random
         f32.const 2
         f32.mul
         f32.const -1
         f32.add
         local.tee $8
         local.get $8
         f32.mul
         f32.add
         f32.const 1
         f32.lt
         br_if $do-loop|0
        end
        local.get $6
        local.get $12
        f32.load
        local.tee $6
        f32.mul
        local.get $9
        f32.add
        local.set $9
        local.get $10
        global.get $assembly/hittables/index/Record
        local.tee $1
        f32.load offset=20
        f32.store offset=4
        local.get $10
        local.get $1
        f32.load offset=24
        f32.store offset=8
        local.get $10
        local.get $1
        f32.load offset=28
        f32.store offset=12
        local.get $11
        local.get $12
        i32.load offset=4
        local.tee $12
        f32.load
        f32.store
        local.get $11
        local.get $12
        f32.load offset=4
        f32.store offset=4
        local.get $11
        local.get $12
        f32.load offset=8
        f32.store offset=8
        local.get $10
        local.get $9
        f32.store offset=16
        local.get $10
        local.get $7
        local.get $6
        f32.mul
        local.get $4
        f32.add
        local.tee $4
        f32.store offset=20
        local.get $10
        local.get $8
        local.get $6
        f32.mul
        local.get $5
        f32.add
        local.tee $5
        f32.store offset=24
        local.get $9
        local.get $1
        f32.load offset=8
        f32.mul
        local.get $4
        local.get $1
        f32.load offset=12
        f32.mul
        f32.add
        local.get $5
        local.get $1
        f32.load offset=16
        f32.mul
        f32.add
        f32.const 0
        f32.gt
        local.set $1
        br $__inlined_func$assembly/materials/Material/Material#scatter@override$321
       end
       loop $do-loop|00
        call $~lib/math/NativeMathf.random
        f32.const 2
        f32.mul
        f32.const -1
        f32.add
        local.tee $4
        local.get $4
        f32.mul
        call $~lib/math/NativeMathf.random
        f32.const 2
        f32.mul
        f32.const -1
        f32.add
        local.tee $9
        local.get $9
        f32.mul
        f32.add
        call $~lib/math/NativeMathf.random
        f32.const 2
        f32.mul
        f32.const -1
        f32.add
        local.tee $6
        local.get $6
        f32.mul
        f32.add
        local.tee $7
        f32.const 1
        f32.lt
        br_if $do-loop|00
       end
       global.get $assembly/hittables/index/Record
       local.tee $1
       f32.load offset=8
       local.tee $5
       local.get $4
       local.get $7
       f32.sqrt
       local.tee $13
       f32.div
       f32.add
       local.set $7
       local.get $1
       f32.load offset=12
       local.tee $8
       local.get $9
       local.get $13
       f32.div
       f32.add
       local.tee $4
       f32.abs
       f32.const 9.99999993922529e-09
       f32.lt
       local.get $7
       f32.abs
       f32.const 9.99999993922529e-09
       f32.lt
       i32.and
       local.get $1
       f32.load offset=16
       local.tee $9
       local.get $6
       local.get $13
       f32.div
       f32.add
       local.tee $6
       f32.abs
       f32.const 9.99999993922529e-09
       f32.lt
       i32.and
       if
        local.get $9
        local.set $6
        local.get $8
        local.set $4
       else
        local.get $7
        local.set $5
       end
       local.get $10
       local.get $5
       f32.store offset=16
       local.get $10
       local.get $4
       f32.store offset=20
       local.get $10
       local.get $6
       f32.store offset=24
       local.get $10
       global.get $assembly/hittables/index/Record
       local.tee $1
       f32.load offset=20
       f32.store offset=4
       local.get $10
       local.get $1
       f32.load offset=24
       f32.store offset=8
       local.get $10
       local.get $1
       f32.load offset=28
       f32.store offset=12
       local.get $11
       local.get $12
       i32.load
       local.tee $1
       f32.load
       f32.store
       local.get $11
       local.get $1
       f32.load offset=4
       f32.store offset=4
       local.get $11
       local.get $1
       f32.load offset=8
       f32.store offset=8
       i32.const 1
       local.set $1
       br $__inlined_func$assembly/materials/Material/Material#scatter@override$321
      end
      local.get $12
      local.get $1
      local.get $10
      local.get $11
      call $assembly/materials/Dielectric/Dielectric#scatter
      i32.const 1
      local.set $1
      br $__inlined_func$assembly/materials/Material/Material#scatter@override$321
     end
     unreachable
    end
    local.get $1
    if
     local.get $0
     local.get $10
     local.get $2
     local.get $3
     i32.const 1
     i32.sub
     call $assembly/Ray/Ray#getColor
     local.tee $0
     local.get $0
     f32.load
     local.get $11
     f32.load
     f32.mul
     f32.store
     local.get $0
     local.get $0
     f32.load offset=4
     local.get $11
     f32.load offset=4
     f32.mul
     f32.store offset=4
     local.get $0
     local.get $0
     f32.load offset=8
     local.get $11
     f32.load offset=8
     f32.mul
     f32.store offset=8
     local.get $0
     return
    end
    br $folding-inner0
   end
   local.get $1
   f32.load offset=16
   local.tee $4
   local.get $4
   f32.mul
   local.get $1
   f32.load offset=20
   local.tee $5
   local.get $5
   f32.mul
   f32.add
   local.get $1
   f32.load offset=24
   local.tee $5
   local.get $5
   f32.mul
   f32.add
   f32.sqrt
   local.set $5
   local.get $1
   local.get $4
   local.get $5
   f32.div
   f32.store offset=16
   local.get $1
   local.get $1
   f32.load offset=20
   local.get $5
   f32.div
   f32.store offset=20
   local.get $1
   local.get $1
   f32.load offset=24
   local.get $5
   f32.div
   f32.store offset=24
   local.get $0
   i32.load
   local.tee $0
   f32.const 1
   local.get $1
   f32.load offset=20
   f32.const 1
   f32.add
   f32.const 0.5
   f32.mul
   local.tee $4
   f32.sub
   local.tee $5
   local.get $4
   f32.const 0.5
   f32.mul
   f32.add
   f32.store
   local.get $0
   local.get $5
   local.get $4
   f32.const 0.699999988079071
   f32.mul
   f32.add
   f32.store offset=4
   local.get $0
   local.get $5
   local.get $4
   f32.add
   f32.store offset=8
   local.get $0
   return
  end
  local.get $0
  i32.load
  local.tee $0
  f32.const 0
  f32.store
  local.get $0
  f32.const 0
  f32.store offset=4
  local.get $0
  f32.const 0
  f32.store offset=8
  local.get $0
 )
 (func $assembly/Tracer/Tracer#createPPMImage (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 f32)
  (local $5 f32)
  (local $6 f32)
  (local $7 f32)
  (local $8 f32)
  (local $9 i32)
  (local $10 f32)
  (local $11 f32)
  (local $12 f32)
  (local $13 f32)
  (local $14 f32)
  (local $15 f32)
  (local $16 f32)
  (local $17 f32)
  (local $18 f32)
  (local $19 f32)
  (local $20 f32)
  (local $21 f32)
  (local $22 f32)
  (local $23 i32)
  (local $24 i32)
  (local $25 i32)
  (local $26 i32)
  (local $27 i32)
  (local $28 i32)
  (local $29 i32)
  (local $30 i32)
  (local $31 i32)
  call $assembly/Ray/Ray#constructor
  local.set $30
  local.get $0
  i32.load8_u offset=8
  local.set $24
  local.get $0
  i32.load
  i32.load
  local.set $23
  i32.const 240
  local.set $3
  loop $for-loop|0
   local.get $3
   local.tee $2
   i32.const 1
   i32.sub
   local.set $3
   local.get $2
   i32.const 65535
   i32.and
   if
    i32.const 0
    local.set $31
    loop $for-loop|1
     local.get $31
     i32.const 360
     i32.lt_u
     if
      local.get $1
      local.get $29
      i32.const 2
      i32.shl
      i32.add
      f32.load
      local.set $22
      local.get $1
      local.get $29
      i32.const 1
      i32.add
      i32.const 2
      i32.shl
      i32.add
      f32.load
      local.set $21
      local.get $1
      local.get $29
      i32.const 2
      i32.add
      i32.const 2
      i32.shl
      i32.add
      f32.load
      local.set $20
      local.get $31
      f32.convert_i32_u
      call $~lib/math/NativeMathf.random
      f32.add
      f32.const 359
      f32.div
      local.set $11
      local.get $3
      f32.convert_i32_u
      call $~lib/math/NativeMathf.random
      f32.add
      f32.const 239
      f32.div
      local.set $10
      local.get $0
      i32.load offset=4
      local.tee $2
      i32.load
      local.set $9
      local.get $2
      i32.load offset=4
      local.set $28
      local.get $2
      i32.load offset=8
      local.set $27
      local.get $2
      i32.load offset=12
      local.set $26
      call $~lib/math/NativeMathf.random
      f32.const 2
      f32.mul
      f32.const -1
      f32.add
      local.tee $5
      local.get $5
      f32.mul
      call $~lib/math/NativeMathf.random
      f32.const 2
      f32.mul
      f32.const -1
      f32.add
      local.tee $6
      local.get $6
      f32.mul
      f32.add
      local.set $4
      loop $while-continue|2
       local.get $4
       f32.const 1
       f32.gt
       if
        call $~lib/math/NativeMathf.random
        f32.const 2
        f32.mul
        f32.const -1
        f32.add
        local.tee $5
        local.get $5
        f32.mul
        call $~lib/math/NativeMathf.random
        f32.const 2
        f32.mul
        f32.const -1
        f32.add
        local.tee $6
        local.get $6
        f32.mul
        f32.add
        local.set $4
        br $while-continue|2
       end
      end
      local.get $2
      i32.load offset=16
      local.tee $25
      f32.load
      local.get $5
      local.get $2
      f32.load offset=24
      local.tee $4
      f32.mul
      local.tee $5
      f32.mul
      local.get $2
      i32.load offset=20
      local.tee $2
      f32.load
      local.get $6
      local.get $4
      f32.mul
      local.tee $4
      f32.mul
      f32.add
      local.set $14
      local.get $25
      f32.load offset=4
      local.get $5
      f32.mul
      local.get $2
      f32.load offset=4
      local.get $4
      f32.mul
      f32.add
      local.set $8
      local.get $25
      f32.load offset=8
      local.get $5
      f32.mul
      local.get $2
      f32.load offset=8
      local.get $4
      f32.mul
      f32.add
      local.set $13
      local.get $9
      f32.load
      local.set $7
      local.get $9
      f32.load offset=4
      local.set $6
      local.get $9
      f32.load offset=8
      local.set $19
      local.get $28
      f32.load
      local.get $11
      f32.mul
      local.set $18
      local.get $28
      f32.load offset=4
      local.get $11
      f32.mul
      local.set $17
      local.get $28
      f32.load offset=8
      local.get $11
      f32.mul
      local.set $5
      local.get $27
      f32.load
      local.get $10
      f32.mul
      local.set $16
      local.get $27
      f32.load offset=4
      local.get $10
      f32.mul
      local.set $15
      local.get $27
      f32.load offset=8
      local.get $10
      f32.mul
      local.set $4
      local.get $26
      f32.load offset=4
      local.set $12
      local.get $26
      f32.load offset=8
      local.set $11
      local.get $30
      local.get $14
      local.get $26
      f32.load
      local.tee $10
      f32.add
      f32.store offset=4
      local.get $30
      local.get $8
      local.get $12
      f32.add
      f32.store offset=8
      local.get $30
      local.get $13
      local.get $11
      f32.add
      f32.store offset=12
      local.get $30
      local.get $7
      local.get $18
      f32.add
      local.get $16
      f32.add
      local.get $10
      f32.sub
      local.get $14
      f32.sub
      f32.store offset=16
      local.get $30
      local.get $6
      local.get $17
      f32.add
      local.get $15
      f32.add
      local.get $12
      f32.sub
      local.get $8
      f32.sub
      f32.store offset=20
      local.get $30
      local.get $19
      local.get $5
      f32.add
      local.get $4
      f32.add
      local.get $11
      f32.sub
      local.get $13
      f32.sub
      f32.store offset=24
      local.get $21
      local.get $30
      local.get $30
      local.get $23
      local.get $24
      call $assembly/Ray/Ray#getColor
      local.tee $2
      f32.load offset=4
      f32.add
      local.set $5
      local.get $20
      local.get $2
      f32.load offset=8
      f32.add
      local.set $4
      local.get $1
      local.get $29
      i32.const 2
      i32.shl
      i32.add
      local.get $22
      local.get $2
      f32.load
      f32.add
      f32.store
      local.get $1
      local.get $29
      i32.const 1
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $5
      f32.store
      local.get $1
      local.get $29
      i32.const 2
      i32.add
      i32.const 2
      i32.shl
      i32.add
      local.get $4
      f32.store
      local.get $31
      i32.const 1
      i32.add
      local.set $31
      local.get $29
      i32.const 3
      i32.add
      local.set $29
      br $for-loop|1
     end
    end
    br $for-loop|0
   end
  end
  local.get $1
 )
 (func $assembly/Tracer/trace (param $0 i32) (result i32)
  global.get $assembly/Tracer/tracer
  local.get $0
  call $assembly/Tracer/Tracer#createPPMImage
 )
 (func $assembly/Tracer/format (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  i32.const 3
  global.set $~argumentsLength
  local.get $0
  local.get $1
  local.get $2
  i32.const 1056
  i32.load
  call_indirect (type $2)
 )
 (func $~lib/rt/tcms/__pin (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 3
   i32.eq
   if
    i32.const 1968
    i32.const 1152
    i32.const 181
    i32.const 7
    call $~lib/builtins/abort
    unreachable
   end
   block $__inlined_func$~lib/rt/tcms/Object#unlink$6
    local.get $1
    i32.load offset=4
    i32.const -4
    i32.and
    local.tee $2
    i32.eqz
    if
     local.get $1
     i32.load offset=8
     drop
     br $__inlined_func$~lib/rt/tcms/Object#unlink$6
    end
    local.get $2
    local.get $1
    i32.load offset=8
    local.tee $3
    i32.store offset=8
    local.get $3
    local.get $2
    local.get $3
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
   end
   global.get $~lib/rt/tcms/pinSpace
   local.tee $2
   i32.load offset=8
   local.set $3
   local.get $1
   local.get $2
   i32.const 3
   i32.or
   i32.store offset=4
   local.get $1
   local.get $3
   i32.store offset=8
   local.get $3
   local.get $1
   local.get $3
   i32.load offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store offset=4
   local.get $2
   local.get $1
   i32.store offset=8
  end
  local.get $0
 )
 (func $~lib/rt/tcms/__unpin (param $0 i32)
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
  local.tee $0
  i32.load offset=4
  i32.const 3
  i32.and
  i32.const 3
  i32.ne
  if
   i32.const 2064
   i32.const 1152
   i32.const 195
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
  block $__inlined_func$~lib/rt/tcms/Object#unlink$7
   local.get $0
   i32.load offset=4
   i32.const -4
   i32.and
   local.tee $1
   i32.eqz
   if
    local.get $0
    i32.load offset=8
    drop
    br $__inlined_func$~lib/rt/tcms/Object#unlink$7
   end
   local.get $1
   local.get $0
   i32.load offset=8
   local.tee $2
   i32.store offset=8
   local.get $2
   local.get $1
   local.get $2
   i32.load offset=4
   i32.const 3
   i32.and
   i32.or
   i32.store offset=4
  end
  global.get $~lib/rt/tcms/fromSpace
  local.tee $1
  i32.load offset=8
  local.set $2
  local.get $0
  local.get $1
  global.get $~lib/rt/tcms/white
  i32.or
  i32.store offset=4
  local.get $0
  local.get $2
  i32.store offset=8
  local.get $2
  local.get $0
  local.get $2
  i32.load offset=4
  i32.const 3
  i32.and
  i32.or
  i32.store offset=4
  local.get $1
  local.get $0
  i32.store offset=8
 )
 (func $~lib/rt/tcms/__collect
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/rt/tcms/white
  i32.const 1584
  i32.load
  local.tee $0
  i32.const 3
  i32.and
  i32.eq
  if
   block $__inlined_func$~lib/rt/tcms/Object#unlink$8
    local.get $0
    i32.const -4
    i32.and
    local.tee $1
    i32.eqz
    if
     i32.const 1588
     i32.load
     drop
     br $__inlined_func$~lib/rt/tcms/Object#unlink$8
    end
    local.get $1
    i32.const 1588
    i32.load
    local.tee $0
    i32.store offset=8
    local.get $0
    local.get $1
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
   end
   global.get $~lib/rt/tcms/toSpace
   local.tee $1
   i32.load offset=8
   local.set $0
   i32.const 1584
   local.get $1
   global.get $~lib/rt/tcms/white
   i32.eqz
   i32.or
   i32.store
   i32.const 1588
   local.get $0
   i32.store
   local.get $0
   local.get $0
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 1580
   i32.or
   i32.store offset=4
   local.get $1
   i32.const 1580
   i32.store offset=8
  end
  global.get $~lib/rt/tcms/white
  i32.const 1072
  i32.load
  local.tee $0
  i32.const 3
  i32.and
  i32.eq
  if
   block $__inlined_func$~lib/rt/tcms/Object#unlink$80
    local.get $0
    i32.const -4
    i32.and
    local.tee $1
    i32.eqz
    if
     i32.const 1076
     i32.load
     drop
     br $__inlined_func$~lib/rt/tcms/Object#unlink$80
    end
    local.get $1
    i32.const 1076
    i32.load
    local.tee $0
    i32.store offset=8
    local.get $0
    local.get $1
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
   end
   global.get $~lib/rt/tcms/toSpace
   local.tee $1
   i32.load offset=8
   local.set $0
   i32.const 1072
   local.get $1
   global.get $~lib/rt/tcms/white
   i32.eqz
   i32.or
   i32.store
   i32.const 1076
   local.get $0
   i32.store
   local.get $0
   local.get $0
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 1068
   i32.or
   i32.store offset=4
   local.get $1
   i32.const 1068
   i32.store offset=8
  end
  global.get $~lib/rt/tcms/white
  i32.const 1952
  i32.load
  local.tee $0
  i32.const 3
  i32.and
  i32.eq
  if
   block $__inlined_func$~lib/rt/tcms/Object#unlink$81
    local.get $0
    i32.const -4
    i32.and
    local.tee $1
    i32.eqz
    if
     i32.const 1956
     i32.load
     drop
     br $__inlined_func$~lib/rt/tcms/Object#unlink$81
    end
    local.get $1
    i32.const 1956
    i32.load
    local.tee $0
    i32.store offset=8
    local.get $0
    local.get $1
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
   end
   global.get $~lib/rt/tcms/toSpace
   local.tee $1
   i32.load offset=8
   local.set $0
   i32.const 1952
   local.get $1
   global.get $~lib/rt/tcms/white
   i32.eqz
   i32.or
   i32.store
   i32.const 1956
   local.get $0
   i32.store
   local.get $0
   local.get $0
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 1948
   i32.or
   i32.store offset=4
   local.get $1
   i32.const 1948
   i32.store offset=8
  end
  global.get $~lib/rt/tcms/white
  i32.const 2048
  i32.load
  local.tee $0
  i32.const 3
  i32.and
  i32.eq
  if
   block $__inlined_func$~lib/rt/tcms/Object#unlink$82
    local.get $0
    i32.const -4
    i32.and
    local.tee $1
    i32.eqz
    if
     i32.const 2052
     i32.load
     drop
     br $__inlined_func$~lib/rt/tcms/Object#unlink$82
    end
    local.get $1
    i32.const 2052
    i32.load
    local.tee $0
    i32.store offset=8
    local.get $0
    local.get $1
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
   end
   global.get $~lib/rt/tcms/toSpace
   local.tee $1
   i32.load offset=8
   local.set $0
   i32.const 2048
   local.get $1
   global.get $~lib/rt/tcms/white
   i32.eqz
   i32.or
   i32.store
   i32.const 2052
   local.get $0
   i32.store
   local.get $0
   local.get $0
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 2044
   i32.or
   i32.store offset=4
   local.get $1
   i32.const 2044
   i32.store offset=8
  end
  global.get $assembly/Tracer/tracer
  local.tee $0
  if
   global.get $~lib/rt/tcms/white
   local.get $0
   i32.const 20
   i32.sub
   local.tee $2
   i32.load offset=4
   local.tee $0
   i32.const 3
   i32.and
   i32.eq
   if
    block $__inlined_func$~lib/rt/tcms/Object#unlink$83
     local.get $0
     i32.const -4
     i32.and
     local.tee $1
     i32.eqz
     if
      local.get $2
      i32.load offset=8
      drop
      br $__inlined_func$~lib/rt/tcms/Object#unlink$83
     end
     local.get $1
     local.get $2
     i32.load offset=8
     local.tee $0
     i32.store offset=8
     local.get $0
     local.get $1
     local.get $0
     i32.load offset=4
     i32.const 3
     i32.and
     i32.or
     i32.store offset=4
    end
    global.get $~lib/rt/tcms/toSpace
    local.tee $1
    i32.load offset=8
    local.set $0
    local.get $2
    local.get $1
    global.get $~lib/rt/tcms/white
    i32.eqz
    i32.or
    i32.store offset=4
    local.get $2
    local.get $0
    i32.store offset=8
    local.get $0
    local.get $2
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
    local.get $1
    local.get $2
    i32.store offset=8
   end
  end
  global.get $assembly/hittables/index/Record
  local.tee $0
  if
   global.get $~lib/rt/tcms/white
   local.get $0
   i32.const 20
   i32.sub
   local.tee $2
   i32.load offset=4
   local.tee $0
   i32.const 3
   i32.and
   i32.eq
   if
    block $__inlined_func$~lib/rt/tcms/Object#unlink$84
     local.get $0
     i32.const -4
     i32.and
     local.tee $1
     i32.eqz
     if
      local.get $2
      i32.load offset=8
      drop
      br $__inlined_func$~lib/rt/tcms/Object#unlink$84
     end
     local.get $1
     local.get $2
     i32.load offset=8
     local.tee $0
     i32.store offset=8
     local.get $0
     local.get $1
     local.get $0
     i32.load offset=4
     i32.const 3
     i32.and
     i32.or
     i32.store offset=4
    end
    global.get $~lib/rt/tcms/toSpace
    local.tee $1
    i32.load offset=8
    local.set $0
    local.get $2
    local.get $1
    global.get $~lib/rt/tcms/white
    i32.eqz
    i32.or
    i32.store offset=4
    local.get $2
    local.get $0
    i32.store offset=8
    local.get $0
    local.get $2
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
    local.get $1
    local.get $2
    i32.store offset=8
   end
  end
  global.get $~lib/rt/tcms/white
  i32.const 1344
  i32.load
  local.tee $0
  i32.const 3
  i32.and
  i32.eq
  if
   block $__inlined_func$~lib/rt/tcms/Object#unlink$85
    local.get $0
    i32.const -4
    i32.and
    local.tee $1
    i32.eqz
    if
     i32.const 1348
     i32.load
     drop
     br $__inlined_func$~lib/rt/tcms/Object#unlink$85
    end
    local.get $1
    i32.const 1348
    i32.load
    local.tee $0
    i32.store offset=8
    local.get $0
    local.get $1
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
   end
   global.get $~lib/rt/tcms/toSpace
   local.tee $1
   i32.load offset=8
   local.set $0
   i32.const 1344
   local.get $1
   global.get $~lib/rt/tcms/white
   i32.eqz
   i32.or
   i32.store
   i32.const 1348
   local.get $0
   i32.store
   local.get $0
   local.get $0
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 1340
   i32.or
   i32.store offset=4
   local.get $1
   i32.const 1340
   i32.store offset=8
  end
  global.get $~lib/rt/tcms/white
  i32.const 1440
  i32.load
  local.tee $0
  i32.const 3
  i32.and
  i32.eq
  if
   block $__inlined_func$~lib/rt/tcms/Object#unlink$86
    local.get $0
    i32.const -4
    i32.and
    local.tee $1
    i32.eqz
    if
     i32.const 1444
     i32.load
     drop
     br $__inlined_func$~lib/rt/tcms/Object#unlink$86
    end
    local.get $1
    i32.const 1444
    i32.load
    local.tee $0
    i32.store offset=8
    local.get $0
    local.get $1
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
   end
   global.get $~lib/rt/tcms/toSpace
   local.tee $1
   i32.load offset=8
   local.set $0
   i32.const 1440
   local.get $1
   global.get $~lib/rt/tcms/white
   i32.eqz
   i32.or
   i32.store
   i32.const 1444
   local.get $0
   i32.store
   local.get $0
   local.get $0
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 1436
   i32.or
   i32.store offset=4
   local.get $1
   i32.const 1436
   i32.store offset=8
  end
  global.get $~lib/rt/tcms/white
  i32.const 1536
  i32.load
  local.tee $0
  i32.const 3
  i32.and
  i32.eq
  if
   block $__inlined_func$~lib/rt/tcms/Object#unlink$87
    local.get $0
    i32.const -4
    i32.and
    local.tee $1
    i32.eqz
    if
     i32.const 1540
     i32.load
     drop
     br $__inlined_func$~lib/rt/tcms/Object#unlink$87
    end
    local.get $1
    i32.const 1540
    i32.load
    local.tee $0
    i32.store offset=8
    local.get $0
    local.get $1
    local.get $0
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
   end
   global.get $~lib/rt/tcms/toSpace
   local.tee $1
   i32.load offset=8
   local.set $0
   i32.const 1536
   local.get $1
   global.get $~lib/rt/tcms/white
   i32.eqz
   i32.or
   i32.store
   i32.const 1540
   local.get $0
   i32.store
   local.get $0
   local.get $0
   i32.load offset=4
   i32.const 3
   i32.and
   i32.const 1532
   i32.or
   i32.store offset=4
   local.get $1
   i32.const 1532
   i32.store offset=8
  end
  global.get $~lib/rt/tcms/pinSpace
  local.tee $0
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $1
  loop $while-continue|0
   local.get $0
   local.get $1
   i32.ne
   if
    local.get $1
    i32.load offset=4
    drop
    local.get $1
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $1
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $1
    br $while-continue|0
   end
  end
  global.get $~lib/rt/tcms/white
  i32.eqz
  local.set $4
  global.get $~lib/rt/tcms/toSpace
  local.tee $5
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $1
  loop $while-continue|1
   local.get $1
   local.get $5
   i32.ne
   if
    local.get $1
    i32.load offset=4
    drop
    local.get $1
    i32.const 20
    i32.add
    call $~lib/rt/__visit_members
    local.get $1
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $1
    br $while-continue|1
   end
  end
  global.get $~lib/rt/tcms/fromSpace
  local.tee $2
  i32.load offset=4
  i32.const -4
  i32.and
  local.set $1
  loop $while-continue|2
   local.get $1
   local.get $2
   i32.ne
   if
    local.get $1
    i32.load offset=4
    i32.const -4
    i32.and
    local.set $0
    local.get $1
    i32.const 2748
    i32.lt_u
    if
     local.get $1
     i32.const 0
     i32.store offset=4
     local.get $1
     i32.const 0
     i32.store offset=8
    else
     global.get $~lib/rt/tcms/total
     local.get $1
     i32.load
     i32.const -4
     i32.and
     i32.const 4
     i32.add
     i32.sub
     global.set $~lib/rt/tcms/total
     local.get $1
     i32.const 4
     i32.add
     local.tee $1
     i32.const 2748
     i32.ge_u
     if
      global.get $~lib/rt/tlsf/ROOT
      i32.eqz
      if
       call $~lib/rt/tlsf/initialize
      end
      local.get $1
      i32.const 4
      i32.sub
      local.set $3
      local.get $1
      i32.const 15
      i32.and
      i32.const 1
      local.get $1
      select
      i32.eqz
      if
       local.get $3
       i32.load
       drop
      end
      local.get $3
      local.get $3
      i32.load
      i32.const 1
      i32.or
      i32.store
      global.get $~lib/rt/tlsf/ROOT
      local.get $3
      call $~lib/rt/tlsf/insertBlock
     end
    end
    local.get $0
    local.set $1
    br $while-continue|2
   end
  end
  local.get $2
  local.get $2
  i32.store offset=4
  local.get $2
  local.get $2
  i32.store offset=8
  local.get $5
  global.set $~lib/rt/tcms/fromSpace
  local.get $2
  global.set $~lib/rt/tcms/toSpace
  local.get $4
  global.set $~lib/rt/tcms/white
 )
 (func $assembly/hittables/Sphere/Sphere#hit (param $0 i32) (param $1 i32) (param $2 f32) (result i32)
  (local $3 f32)
  (local $4 f32)
  (local $5 f32)
  (local $6 f32)
  (local $7 f32)
  (local $8 f32)
  (local $9 f32)
  (local $10 f32)
  (local $11 f32)
  (local $12 f32)
  (local $13 i32)
  (local $14 f32)
  (local $15 f32)
  (local $16 f32)
  (local $17 f32)
  local.get $1
  f32.load offset=16
  local.tee $8
  local.get $8
  f32.mul
  local.get $1
  f32.load offset=20
  local.tee $9
  local.get $9
  f32.mul
  f32.add
  local.get $1
  f32.load offset=24
  local.tee $10
  local.get $10
  f32.mul
  f32.add
  local.set $11
  local.get $1
  f32.load offset=4
  local.tee $12
  local.get $0
  i32.load offset=4
  local.tee $13
  f32.load
  local.tee $4
  f32.sub
  local.tee $14
  local.get $8
  f32.mul
  local.get $1
  f32.load offset=8
  local.tee $15
  local.get $13
  f32.load offset=4
  local.tee $5
  f32.sub
  local.tee $16
  local.get $9
  f32.mul
  f32.add
  local.get $1
  f32.load offset=12
  local.tee $6
  local.get $13
  f32.load offset=8
  local.tee $7
  f32.sub
  local.tee $3
  local.get $10
  f32.mul
  f32.add
  local.tee $17
  local.get $17
  f32.mul
  local.get $11
  local.get $14
  local.get $14
  f32.mul
  local.get $16
  local.get $16
  f32.mul
  f32.add
  local.get $3
  local.get $3
  f32.mul
  f32.add
  local.get $0
  f32.load
  local.tee $3
  local.get $3
  f32.mul
  f32.sub
  f32.mul
  f32.sub
  local.tee $3
  f32.const 0
  f32.lt
  if
   i32.const 0
   return
  end
  local.get $17
  f32.neg
  local.tee $14
  local.get $3
  f32.sqrt
  local.tee $16
  f32.sub
  local.get $11
  f32.div
  local.tee $3
  local.get $2
  f32.gt
  local.get $3
  f32.const 1.0000000474974513e-03
  f32.lt
  i32.or
  if
   local.get $14
   local.get $16
   f32.add
   local.get $11
   f32.div
   local.tee $3
   local.get $2
   f32.gt
   local.get $3
   f32.const 1.0000000474974513e-03
   f32.lt
   i32.or
   if
    i32.const 0
    return
   end
  end
  global.get $assembly/hittables/index/Record
  local.tee $13
  local.get $12
  local.get $8
  local.get $3
  f32.mul
  f32.add
  local.tee $2
  f32.store offset=20
  local.get $13
  local.get $15
  local.get $9
  local.get $3
  f32.mul
  f32.add
  local.tee $8
  f32.store offset=24
  local.get $13
  local.get $6
  local.get $10
  local.get $3
  f32.mul
  f32.add
  local.tee $6
  f32.store offset=28
  local.get $13
  local.get $1
  f32.load offset=16
  local.get $2
  local.get $4
  f32.sub
  local.get $0
  f32.load
  local.tee $2
  f32.div
  local.tee $4
  f32.mul
  local.get $1
  f32.load offset=20
  local.get $8
  local.get $5
  f32.sub
  local.get $2
  f32.div
  local.tee $5
  f32.mul
  f32.add
  local.get $1
  f32.load offset=24
  local.get $6
  local.get $7
  f32.sub
  local.get $2
  f32.div
  local.tee $2
  f32.mul
  f32.add
  f32.const 0
  f32.lt
  i32.store8
  local.get $13
  i32.load8_u
  i32.eqz
  if
   local.get $5
   f32.neg
   local.set $5
   local.get $4
   f32.neg
   local.set $4
   local.get $2
   f32.neg
   local.set $2
  end
  local.get $13
  local.get $4
  f32.store offset=8
  local.get $13
  local.get $5
  f32.store offset=12
  local.get $13
  local.get $2
  f32.store offset=16
  global.get $assembly/hittables/index/Record
  local.tee $1
  local.get $0
  i32.load offset=8
  i32.store offset=4
  local.get $1
  local.get $3
  f32.store offset=32
  i32.const 1
 )
 (func $~lib/math/NativeMathf.pow (param $0 f32) (param $1 f32) (result f32)
  (local $2 i32)
  (local $3 f64)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 f64)
  local.get $1
  f32.abs
  f32.const 2
  f32.le
  if
   local.get $1
   f32.const 2
   f32.eq
   if
    local.get $0
    local.get $0
    f32.mul
    return
   end
   local.get $1
   f32.const 0.5
   f32.eq
   if
    local.get $0
    f32.sqrt
    f32.abs
    f32.const inf
    local.get $0
    f32.const -inf
    f32.ne
    select
    return
   end
   local.get $1
   f32.const -1
   f32.eq
   if
    f32.const 1
    local.get $0
    f32.div
    return
   end
   local.get $1
   f32.const 1
   f32.eq
   if
    local.get $0
    return
   end
   local.get $1
   f32.const 0
   f32.eq
   if
    f32.const 1
    return
   end
  end
  block $~lib/util/math/powf_lut|inlined.0 (result f32)
   local.get $1
   i32.reinterpret_f32
   local.tee $6
   i32.const 1
   i32.shl
   local.tee $7
   i32.const 1
   i32.sub
   i32.const -16777217
   i32.ge_u
   local.tee $8
   local.get $0
   i32.reinterpret_f32
   local.tee $2
   i32.const 8388608
   i32.sub
   i32.const 2130706432
   i32.ge_u
   i32.or
   if
    local.get $8
    if
     f32.const 1
     local.get $7
     i32.eqz
     br_if $~lib/util/math/powf_lut|inlined.0
     drop
     f32.const nan:0x400000
     local.get $2
     i32.const 1065353216
     i32.eq
     br_if $~lib/util/math/powf_lut|inlined.0
     drop
     local.get $0
     local.get $1
     f32.add
     local.get $7
     i32.const -16777216
     i32.gt_u
     local.get $2
     i32.const 1
     i32.shl
     local.tee $2
     i32.const -16777216
     i32.gt_u
     i32.or
     br_if $~lib/util/math/powf_lut|inlined.0
     drop
     f32.const nan:0x400000
     local.get $2
     i32.const 2130706432
     i32.eq
     br_if $~lib/util/math/powf_lut|inlined.0
     drop
     f32.const 0
     local.get $6
     i32.const 31
     i32.shr_u
     i32.eqz
     local.get $2
     i32.const 2130706432
     i32.lt_u
     i32.eq
     br_if $~lib/util/math/powf_lut|inlined.0
     drop
     local.get $1
     local.get $1
     f32.mul
     br $~lib/util/math/powf_lut|inlined.0
    end
    local.get $2
    i32.const 1
    i32.shl
    i32.const 1
    i32.sub
    i32.const -16777217
    i32.ge_u
    if
     f32.const 1
     local.get $0
     local.get $0
     f32.mul
     local.tee $0
     f32.neg
     local.get $0
     local.get $2
     i32.const 31
     i32.shr_u
     if (result i32)
      block $~lib/util/math/checkintf|inlined.0 (result i32)
       i32.const 0
       local.get $6
       i32.const 23
       i32.shr_u
       i32.const 255
       i32.and
       local.tee $2
       i32.const 127
       i32.lt_u
       br_if $~lib/util/math/checkintf|inlined.0
       drop
       i32.const 2
       local.get $2
       i32.const 150
       i32.gt_u
       br_if $~lib/util/math/checkintf|inlined.0
       drop
       i32.const 0
       local.get $6
       i32.const 1
       i32.const 150
       local.get $2
       i32.sub
       i32.shl
       local.tee $2
       i32.const 1
       i32.sub
       i32.and
       br_if $~lib/util/math/checkintf|inlined.0
       drop
       i32.const 1
       local.get $2
       local.get $6
       i32.and
       br_if $~lib/util/math/checkintf|inlined.0
       drop
       i32.const 2
      end
      i32.const 1
      i32.eq
     else
      i32.const 0
     end
     select
     local.tee $0
     f32.div
     local.get $0
     local.get $6
     i32.const 0
     i32.lt_s
     select
     br $~lib/util/math/powf_lut|inlined.0
    end
    local.get $2
    i32.const 0
    i32.lt_s
    if
     block $~lib/util/math/checkintf|inlined.1 (result i32)
      i32.const 0
      local.get $6
      i32.const 23
      i32.shr_u
      i32.const 255
      i32.and
      local.tee $4
      i32.const 127
      i32.lt_u
      br_if $~lib/util/math/checkintf|inlined.1
      drop
      i32.const 2
      local.get $4
      i32.const 150
      i32.gt_u
      br_if $~lib/util/math/checkintf|inlined.1
      drop
      i32.const 0
      local.get $6
      i32.const 1
      i32.const 150
      local.get $4
      i32.sub
      i32.shl
      local.tee $4
      i32.const 1
      i32.sub
      i32.and
      br_if $~lib/util/math/checkintf|inlined.1
      drop
      i32.const 1
      local.get $4
      local.get $6
      i32.and
      br_if $~lib/util/math/checkintf|inlined.1
      drop
      i32.const 2
     end
     local.tee $4
     i32.eqz
     if
      local.get $0
      local.get $0
      f32.sub
      local.tee $0
      local.get $0
      f32.div
      br $~lib/util/math/powf_lut|inlined.0
     end
     i32.const 65536
     i32.const 0
     local.get $4
     i32.const 1
     i32.eq
     select
     local.set $4
     local.get $2
     i32.const 2147483647
     i32.and
     local.set $2
    end
    local.get $2
    i32.const 8388608
    i32.lt_u
    if
     local.get $0
     f32.const 8388608
     f32.mul
     i32.reinterpret_f32
     i32.const 2147483647
     i32.and
     i32.const 192937984
     i32.sub
     local.set $2
    end
   end
   local.get $2
   local.get $2
   i32.const 1060306944
   i32.sub
   local.tee $2
   i32.const -8388608
   i32.and
   local.tee $6
   i32.sub
   f32.reinterpret_i32
   f64.promote_f32
   local.get $2
   i32.const 19
   i32.shr_u
   i32.const 15
   i32.and
   i32.const 4
   i32.shl
   i32.const 2136
   i32.add
   local.tee $2
   f64.load
   f64.mul
   f64.const -1
   f64.add
   local.tee $3
   local.get $3
   f64.mul
   local.set $9
   local.get $1
   f64.promote_f32
   local.get $3
   f64.const 0.288457581109214
   f64.mul
   f64.const -0.36092606229713164
   f64.add
   local.get $9
   local.get $9
   f64.mul
   f64.mul
   local.get $3
   f64.const 1.4426950408774342
   f64.mul
   local.get $2
   f64.load offset=8
   local.get $6
   i32.const 23
   i32.shr_s
   f64.convert_i32_s
   f64.add
   f64.add
   local.get $3
   f64.const 0.480898481472577
   f64.mul
   f64.const -0.7213474675006291
   f64.add
   local.get $9
   f64.mul
   f64.add
   f64.add
   f64.mul
   local.tee $3
   i64.reinterpret_f64
   i64.const 47
   i64.shr_u
   i64.const 65535
   i64.and
   i64.const 32959
   i64.ge_u
   if
    f32.const -1584563250285286751870879e5
    f32.const 1584563250285286751870879e5
    local.get $4
    select
    f32.const 1584563250285286751870879e5
    f32.mul
    local.get $3
    f64.const 127.99999995700433
    f64.gt
    br_if $~lib/util/math/powf_lut|inlined.0
    drop
    f32.const -2.524354896707238e-29
    f32.const 2.524354896707238e-29
    local.get $4
    select
    f32.const 2.524354896707238e-29
    f32.mul
    local.get $3
    f64.const -150
    f64.le
    br_if $~lib/util/math/powf_lut|inlined.0
    drop
   end
   local.get $3
   f64.const 211106232532992
   f64.add
   local.tee $9
   i64.reinterpret_f64
   local.set $5
   local.get $3
   local.get $9
   f64.const -211106232532992
   f64.add
   f64.sub
   local.tee $3
   f64.const 0.6931471806916203
   f64.mul
   f64.const 1
   f64.add
   local.get $3
   f64.const 0.05550361559341535
   f64.mul
   f64.const 0.2402284522445722
   f64.add
   local.get $3
   local.get $3
   f64.mul
   f64.mul
   f64.add
   local.get $5
   i32.wrap_i64
   i32.const 31
   i32.and
   i32.const 3
   i32.shl
   i32.const 2392
   i32.add
   i64.load
   local.get $5
   local.get $4
   i64.extend_i32_u
   i64.add
   i64.const 47
   i64.shl
   i64.add
   f64.reinterpret_i64
   f64.mul
   f32.demote_f64
  end
 )
 (func $assembly/materials/Dielectric/Dielectric#scatter (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 f32)
  (local $5 f32)
  (local $6 f32)
  (local $7 f32)
  (local $8 f32)
  (local $9 f32)
  (local $10 f32)
  local.get $1
  f32.load offset=16
  local.tee $4
  local.get $4
  f32.mul
  local.get $1
  f32.load offset=20
  local.tee $5
  local.get $5
  f32.mul
  f32.add
  local.get $1
  f32.load offset=24
  local.tee $6
  local.get $6
  f32.mul
  f32.add
  f32.sqrt
  local.set $7
  f32.const 1
  global.get $assembly/hittables/index/Record
  local.tee $1
  f32.load offset=8
  local.get $4
  local.get $7
  f32.div
  local.tee $4
  f32.neg
  f32.mul
  local.get $1
  f32.load offset=12
  local.get $5
  local.get $7
  f32.div
  local.tee $5
  f32.neg
  f32.mul
  f32.add
  local.get $1
  f32.load offset=16
  local.get $6
  local.get $7
  f32.div
  local.tee $6
  f32.neg
  f32.mul
  f32.add
  f32.const 1
  f32.min
  local.tee $7
  local.get $7
  f32.mul
  f32.sub
  f32.sqrt
  local.get $1
  i32.load8_u
  if (result f32)
   f32.const 1
   local.get $0
   f32.load
   f32.div
  else
   local.get $0
   f32.load
  end
  local.tee $8
  f32.mul
  f32.const 1
  f32.gt
  local.tee $0
  if (result i32)
   local.get $0
  else
   call $~lib/math/NativeMathf.random
   local.set $9
   f32.const 1
   local.get $8
   f32.sub
   local.get $8
   f32.const 1
   f32.add
   f32.div
   f32.const 2
   call $~lib/math/NativeMathf.pow
   local.set $10
   local.get $9
   f32.const 1
   local.get $7
   f32.sub
   f32.const 5
   call $~lib/math/NativeMathf.pow
   f32.const 1
   local.get $10
   f32.sub
   f32.mul
   local.get $10
   f32.add
   f32.lt
  end
  if (result f32)
   local.get $4
   global.get $assembly/hittables/index/Record
   local.tee $0
   f32.load offset=8
   local.tee $7
   local.get $7
   local.get $4
   f32.mul
   local.get $0
   f32.load offset=12
   local.tee $7
   local.get $5
   f32.mul
   f32.add
   local.get $0
   f32.load offset=16
   local.tee $8
   local.get $6
   f32.mul
   f32.add
   f32.const 2
   f32.mul
   local.tee $9
   f32.mul
   f32.sub
   local.set $4
   local.get $5
   local.get $7
   local.get $9
   f32.mul
   f32.sub
   local.set $5
   local.get $6
   local.get $8
   local.get $9
   f32.mul
   f32.sub
  else
   global.get $assembly/hittables/index/Record
   local.tee $0
   f32.load offset=8
   local.tee $9
   local.get $7
   f32.mul
   local.get $4
   f32.add
   local.get $8
   f32.mul
   local.tee $4
   local.get $9
   f32.const 1
   local.get $4
   local.get $4
   f32.mul
   local.get $0
   f32.load offset=12
   local.tee $9
   local.get $7
   f32.mul
   local.get $5
   f32.add
   local.get $8
   f32.mul
   local.tee $5
   local.get $5
   f32.mul
   f32.add
   local.get $0
   f32.load offset=16
   local.tee $10
   local.get $7
   f32.mul
   local.get $6
   f32.add
   local.get $8
   f32.mul
   local.tee $6
   local.get $6
   f32.mul
   f32.add
   f32.sub
   f32.abs
   f32.sqrt
   f32.neg
   local.tee $7
   f32.mul
   f32.add
   local.set $4
   local.get $5
   local.get $9
   local.get $7
   f32.mul
   f32.add
   local.set $5
   local.get $6
   local.get $10
   local.get $7
   f32.mul
   f32.add
  end
  local.set $6
  local.get $2
  global.get $assembly/hittables/index/Record
  local.tee $0
  f32.load offset=20
  f32.store offset=4
  local.get $2
  local.get $0
  f32.load offset=24
  f32.store offset=8
  local.get $2
  local.get $0
  f32.load offset=28
  f32.store offset=12
  local.get $2
  local.get $4
  f32.store offset=16
  local.get $2
  local.get $5
  f32.store offset=20
  local.get $2
  local.get $6
  f32.store offset=24
  local.get $3
  f32.const 1
  f32.store
  local.get $3
  f32.const 1
  f32.store offset=4
  local.get $3
  f32.const 1
  f32.store offset=8
 )
 (func $assembly/hittables/Hittable/Hittable#hit@override (param $0 i32) (param $1 i32) (param $2 f32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  block $default
   block $case1
    local.get $0
    i32.const 8
    i32.sub
    i32.load
    local.tee $5
    i32.const 12
    i32.ne
    if
     local.get $5
     i32.const 18
     i32.eq
     br_if $case1
     br $default
    end
    local.get $0
    i32.load16_u offset=4
    local.set $5
    loop $for-loop|0
     local.get $3
     local.get $5
     i32.lt_u
     if
      local.get $0
      i32.load
      local.get $3
      i32.const 2
      i32.shl
      i32.add
      i32.load
      local.get $1
      local.get $2
      call $assembly/hittables/Hittable/Hittable#hit@override
      if
       i32.const 1
       local.set $4
       global.get $assembly/hittables/index/Record
       f32.load offset=32
       local.set $2
      end
      local.get $3
      i32.const 1
      i32.add
      local.set $3
      br $for-loop|0
     end
    end
    local.get $4
    return
   end
   local.get $0
   local.get $1
   local.get $2
   call $assembly/hittables/Sphere/Sphere#hit
   return
  end
  unreachable
 )
 (func $assembly/Tracer/Tracer~visit (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load
  local.tee $1
  if
   global.get $~lib/rt/tcms/white
   local.get $1
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   local.tee $2
   i32.const 3
   i32.and
   i32.eq
   if
    block $__inlined_func$~lib/rt/tcms/Object#unlink$8
     local.get $2
     i32.const -4
     i32.and
     local.tee $2
     i32.eqz
     if
      local.get $1
      i32.load offset=8
      drop
      br $__inlined_func$~lib/rt/tcms/Object#unlink$8
     end
     local.get $2
     local.get $1
     i32.load offset=8
     local.tee $3
     i32.store offset=8
     local.get $3
     local.get $2
     local.get $3
     i32.load offset=4
     i32.const 3
     i32.and
     i32.or
     i32.store offset=4
    end
    global.get $~lib/rt/tcms/toSpace
    local.tee $2
    i32.load offset=8
    local.set $3
    local.get $1
    local.get $2
    global.get $~lib/rt/tcms/white
    i32.eqz
    i32.or
    i32.store offset=4
    local.get $1
    local.get $3
    i32.store offset=8
    local.get $3
    local.get $1
    local.get $3
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
    local.get $2
    local.get $1
    i32.store offset=8
   end
  end
  local.get $0
  i32.load offset=4
  local.tee $0
  if
   global.get $~lib/rt/tcms/white
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load offset=4
   local.tee $1
   i32.const 3
   i32.and
   i32.eq
   if
    block $__inlined_func$~lib/rt/tcms/Object#unlink$80
     local.get $1
     i32.const -4
     i32.and
     local.tee $1
     i32.eqz
     if
      local.get $0
      i32.load offset=8
      drop
      br $__inlined_func$~lib/rt/tcms/Object#unlink$80
     end
     local.get $1
     local.get $0
     i32.load offset=8
     local.tee $2
     i32.store offset=8
     local.get $2
     local.get $1
     local.get $2
     i32.load offset=4
     i32.const 3
     i32.and
     i32.or
     i32.store offset=4
    end
    global.get $~lib/rt/tcms/toSpace
    local.tee $1
    i32.load offset=8
    local.set $2
    local.get $0
    local.get $1
    global.get $~lib/rt/tcms/white
    i32.eqz
    i32.or
    i32.store offset=4
    local.get $0
    local.get $2
    i32.store offset=8
    local.get $2
    local.get $0
    local.get $2
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
    local.get $1
    local.get $0
    i32.store offset=8
   end
  end
 )
 (func $~lib/rt/__visit_members (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $folding-inner0
   block $folding-inner2
    block $invalid
     block $assembly/materials/Dielectric/Dielectric
      block $assembly/hittables/Sphere/Sphere
       block $assembly/Camera/Camera
        block $assembly/utils/Vector3/Vector3
         block $~lib/staticarray/StaticArray<assembly/hittables/Hittable/Hittable>
          block $assembly/hittables/Hittable/Hittable
           block $assembly/hittables/World/World
            block $assembly/Tracer/Tracer
             block $assembly/materials/Material/Material
              block $~lib/staticarray/StaticArray<u8>
               block $~lib/staticarray/StaticArray<f32>
                block $~lib/string/String
                 block $~lib/arraybuffer/ArrayBuffer
                  block $~lib/object/Object
                   local.get $0
                   i32.const 8
                   i32.sub
                   i32.load
                   br_table $~lib/object/Object $~lib/arraybuffer/ArrayBuffer $~lib/string/String $folding-inner0 $~lib/staticarray/StaticArray<f32> $~lib/staticarray/StaticArray<u8> $folding-inner2 $folding-inner2 $assembly/materials/Material/Material $folding-inner0 $assembly/Tracer/Tracer $assembly/hittables/World/World $folding-inner0 $assembly/hittables/Hittable/Hittable $~lib/staticarray/StaticArray<assembly/hittables/Hittable/Hittable> $assembly/utils/Vector3/Vector3 $assembly/Camera/Camera $folding-inner0 $assembly/hittables/Sphere/Sphere $folding-inner2 $assembly/materials/Dielectric/Dielectric $folding-inner0 $invalid
                  end
                  return
                 end
                 return
                end
                return
               end
               return
              end
              return
             end
             return
            end
            local.get $0
            call $assembly/Tracer/Tracer~visit
            return
           end
           local.get $0
           call $assembly/Tracer/Tracer~visit
           return
          end
          return
         end
         local.get $0
         local.get $0
         i32.const 20
         i32.sub
         i32.load offset=16
         i32.add
         local.set $1
         loop $while-continue|0
          local.get $0
          local.get $1
          i32.lt_u
          if
           local.get $0
           i32.load
           local.tee $2
           if
            global.get $~lib/rt/tcms/white
            local.get $2
            i32.const 20
            i32.sub
            local.tee $2
            i32.load offset=4
            local.tee $3
            i32.const 3
            i32.and
            i32.eq
            if
             block $__inlined_func$~lib/rt/tcms/Object#unlink$83
              local.get $3
              i32.const -4
              i32.and
              local.tee $3
              i32.eqz
              if
               local.get $2
               i32.load offset=8
               drop
               br $__inlined_func$~lib/rt/tcms/Object#unlink$83
              end
              local.get $3
              local.get $2
              i32.load offset=8
              local.tee $4
              i32.store offset=8
              local.get $4
              local.get $3
              local.get $4
              i32.load offset=4
              i32.const 3
              i32.and
              i32.or
              i32.store offset=4
             end
             global.get $~lib/rt/tcms/toSpace
             local.tee $3
             i32.load offset=8
             local.set $4
             local.get $2
             local.get $3
             global.get $~lib/rt/tcms/white
             i32.eqz
             i32.or
             i32.store offset=4
             local.get $2
             local.get $4
             i32.store offset=8
             local.get $4
             local.get $2
             local.get $4
             i32.load offset=4
             i32.const 3
             i32.and
             i32.or
             i32.store offset=4
             local.get $3
             local.get $2
             i32.store offset=8
            end
           end
           local.get $0
           i32.const 4
           i32.add
           local.set $0
           br $while-continue|0
          end
         end
         return
        end
        return
       end
       local.get $0
       i32.load
       local.tee $1
       if
        global.get $~lib/rt/tcms/white
        local.get $1
        i32.const 20
        i32.sub
        local.tee $1
        i32.load offset=4
        local.tee $2
        i32.const 3
        i32.and
        i32.eq
        if
         block $__inlined_func$~lib/rt/tcms/Object#unlink$84
          local.get $2
          i32.const -4
          i32.and
          local.tee $2
          i32.eqz
          if
           local.get $1
           i32.load offset=8
           drop
           br $__inlined_func$~lib/rt/tcms/Object#unlink$84
          end
          local.get $2
          local.get $1
          i32.load offset=8
          local.tee $3
          i32.store offset=8
          local.get $3
          local.get $2
          local.get $3
          i32.load offset=4
          i32.const 3
          i32.and
          i32.or
          i32.store offset=4
         end
         global.get $~lib/rt/tcms/toSpace
         local.tee $2
         i32.load offset=8
         local.set $3
         local.get $1
         local.get $2
         global.get $~lib/rt/tcms/white
         i32.eqz
         i32.or
         i32.store offset=4
         local.get $1
         local.get $3
         i32.store offset=8
         local.get $3
         local.get $1
         local.get $3
         i32.load offset=4
         i32.const 3
         i32.and
         i32.or
         i32.store offset=4
         local.get $2
         local.get $1
         i32.store offset=8
        end
       end
       local.get $0
       i32.load offset=4
       local.tee $1
       if
        global.get $~lib/rt/tcms/white
        local.get $1
        i32.const 20
        i32.sub
        local.tee $1
        i32.load offset=4
        local.tee $2
        i32.const 3
        i32.and
        i32.eq
        if
         block $__inlined_func$~lib/rt/tcms/Object#unlink$85
          local.get $2
          i32.const -4
          i32.and
          local.tee $2
          i32.eqz
          if
           local.get $1
           i32.load offset=8
           drop
           br $__inlined_func$~lib/rt/tcms/Object#unlink$85
          end
          local.get $2
          local.get $1
          i32.load offset=8
          local.tee $3
          i32.store offset=8
          local.get $3
          local.get $2
          local.get $3
          i32.load offset=4
          i32.const 3
          i32.and
          i32.or
          i32.store offset=4
         end
         global.get $~lib/rt/tcms/toSpace
         local.tee $2
         i32.load offset=8
         local.set $3
         local.get $1
         local.get $2
         global.get $~lib/rt/tcms/white
         i32.eqz
         i32.or
         i32.store offset=4
         local.get $1
         local.get $3
         i32.store offset=8
         local.get $3
         local.get $1
         local.get $3
         i32.load offset=4
         i32.const 3
         i32.and
         i32.or
         i32.store offset=4
         local.get $2
         local.get $1
         i32.store offset=8
        end
       end
       local.get $0
       i32.load offset=8
       local.tee $1
       if
        global.get $~lib/rt/tcms/white
        local.get $1
        i32.const 20
        i32.sub
        local.tee $1
        i32.load offset=4
        local.tee $2
        i32.const 3
        i32.and
        i32.eq
        if
         block $__inlined_func$~lib/rt/tcms/Object#unlink$86
          local.get $2
          i32.const -4
          i32.and
          local.tee $2
          i32.eqz
          if
           local.get $1
           i32.load offset=8
           drop
           br $__inlined_func$~lib/rt/tcms/Object#unlink$86
          end
          local.get $2
          local.get $1
          i32.load offset=8
          local.tee $3
          i32.store offset=8
          local.get $3
          local.get $2
          local.get $3
          i32.load offset=4
          i32.const 3
          i32.and
          i32.or
          i32.store offset=4
         end
         global.get $~lib/rt/tcms/toSpace
         local.tee $2
         i32.load offset=8
         local.set $3
         local.get $1
         local.get $2
         global.get $~lib/rt/tcms/white
         i32.eqz
         i32.or
         i32.store offset=4
         local.get $1
         local.get $3
         i32.store offset=8
         local.get $3
         local.get $1
         local.get $3
         i32.load offset=4
         i32.const 3
         i32.and
         i32.or
         i32.store offset=4
         local.get $2
         local.get $1
         i32.store offset=8
        end
       end
       local.get $0
       i32.load offset=12
       local.tee $1
       if
        global.get $~lib/rt/tcms/white
        local.get $1
        i32.const 20
        i32.sub
        local.tee $1
        i32.load offset=4
        local.tee $2
        i32.const 3
        i32.and
        i32.eq
        if
         block $__inlined_func$~lib/rt/tcms/Object#unlink$87
          local.get $2
          i32.const -4
          i32.and
          local.tee $2
          i32.eqz
          if
           local.get $1
           i32.load offset=8
           drop
           br $__inlined_func$~lib/rt/tcms/Object#unlink$87
          end
          local.get $2
          local.get $1
          i32.load offset=8
          local.tee $3
          i32.store offset=8
          local.get $3
          local.get $2
          local.get $3
          i32.load offset=4
          i32.const 3
          i32.and
          i32.or
          i32.store offset=4
         end
         global.get $~lib/rt/tcms/toSpace
         local.tee $2
         i32.load offset=8
         local.set $3
         local.get $1
         local.get $2
         global.get $~lib/rt/tcms/white
         i32.eqz
         i32.or
         i32.store offset=4
         local.get $1
         local.get $3
         i32.store offset=8
         local.get $3
         local.get $1
         local.get $3
         i32.load offset=4
         i32.const 3
         i32.and
         i32.or
         i32.store offset=4
         local.get $2
         local.get $1
         i32.store offset=8
        end
       end
       local.get $0
       i32.load offset=16
       local.tee $1
       if
        global.get $~lib/rt/tcms/white
        local.get $1
        i32.const 20
        i32.sub
        local.tee $1
        i32.load offset=4
        local.tee $2
        i32.const 3
        i32.and
        i32.eq
        if
         block $__inlined_func$~lib/rt/tcms/Object#unlink$88
          local.get $2
          i32.const -4
          i32.and
          local.tee $2
          i32.eqz
          if
           local.get $1
           i32.load offset=8
           drop
           br $__inlined_func$~lib/rt/tcms/Object#unlink$88
          end
          local.get $2
          local.get $1
          i32.load offset=8
          local.tee $3
          i32.store offset=8
          local.get $3
          local.get $2
          local.get $3
          i32.load offset=4
          i32.const 3
          i32.and
          i32.or
          i32.store offset=4
         end
         global.get $~lib/rt/tcms/toSpace
         local.tee $2
         i32.load offset=8
         local.set $3
         local.get $1
         local.get $2
         global.get $~lib/rt/tcms/white
         i32.eqz
         i32.or
         i32.store offset=4
         local.get $1
         local.get $3
         i32.store offset=8
         local.get $3
         local.get $1
         local.get $3
         i32.load offset=4
         i32.const 3
         i32.and
         i32.or
         i32.store offset=4
         local.get $2
         local.get $1
         i32.store offset=8
        end
       end
       local.get $0
       i32.load offset=20
       local.tee $0
       if
        global.get $~lib/rt/tcms/white
        local.get $0
        i32.const 20
        i32.sub
        local.tee $0
        i32.load offset=4
        local.tee $1
        i32.const 3
        i32.and
        i32.eq
        if
         block $__inlined_func$~lib/rt/tcms/Object#unlink$89
          local.get $1
          i32.const -4
          i32.and
          local.tee $1
          i32.eqz
          if
           local.get $0
           i32.load offset=8
           drop
           br $__inlined_func$~lib/rt/tcms/Object#unlink$89
          end
          local.get $1
          local.get $0
          i32.load offset=8
          local.tee $2
          i32.store offset=8
          local.get $2
          local.get $1
          local.get $2
          i32.load offset=4
          i32.const 3
          i32.and
          i32.or
          i32.store offset=4
         end
         global.get $~lib/rt/tcms/toSpace
         local.tee $1
         i32.load offset=8
         local.set $2
         local.get $0
         local.get $1
         global.get $~lib/rt/tcms/white
         i32.eqz
         i32.or
         i32.store offset=4
         local.get $0
         local.get $2
         i32.store offset=8
         local.get $2
         local.get $0
         local.get $2
         i32.load offset=4
         i32.const 3
         i32.and
         i32.or
         i32.store offset=4
         local.get $1
         local.get $0
         i32.store offset=8
        end
       end
       return
      end
      local.get $0
      i32.load offset=4
      local.tee $1
      if
       global.get $~lib/rt/tcms/white
       local.get $1
       i32.const 20
       i32.sub
       local.tee $1
       i32.load offset=4
       local.tee $2
       i32.const 3
       i32.and
       i32.eq
       if
        block $__inlined_func$~lib/rt/tcms/Object#unlink$811
         local.get $2
         i32.const -4
         i32.and
         local.tee $2
         i32.eqz
         if
          local.get $1
          i32.load offset=8
          drop
          br $__inlined_func$~lib/rt/tcms/Object#unlink$811
         end
         local.get $2
         local.get $1
         i32.load offset=8
         local.tee $3
         i32.store offset=8
         local.get $3
         local.get $2
         local.get $3
         i32.load offset=4
         i32.const 3
         i32.and
         i32.or
         i32.store offset=4
        end
        global.get $~lib/rt/tcms/toSpace
        local.tee $2
        i32.load offset=8
        local.set $3
        local.get $1
        local.get $2
        global.get $~lib/rt/tcms/white
        i32.eqz
        i32.or
        i32.store offset=4
        local.get $1
        local.get $3
        i32.store offset=8
        local.get $3
        local.get $1
        local.get $3
        i32.load offset=4
        i32.const 3
        i32.and
        i32.or
        i32.store offset=4
        local.get $2
        local.get $1
        i32.store offset=8
       end
      end
      local.get $0
      i32.load offset=8
      local.tee $0
      if
       global.get $~lib/rt/tcms/white
       local.get $0
       i32.const 20
       i32.sub
       local.tee $0
       i32.load offset=4
       local.tee $1
       i32.const 3
       i32.and
       i32.eq
       if
        block $__inlined_func$~lib/rt/tcms/Object#unlink$812
         local.get $1
         i32.const -4
         i32.and
         local.tee $1
         i32.eqz
         if
          local.get $0
          i32.load offset=8
          drop
          br $__inlined_func$~lib/rt/tcms/Object#unlink$812
         end
         local.get $1
         local.get $0
         i32.load offset=8
         local.tee $2
         i32.store offset=8
         local.get $2
         local.get $1
         local.get $2
         i32.load offset=4
         i32.const 3
         i32.and
         i32.or
         i32.store offset=4
        end
        global.get $~lib/rt/tcms/toSpace
        local.tee $1
        i32.load offset=8
        local.set $2
        local.get $0
        local.get $1
        global.get $~lib/rt/tcms/white
        i32.eqz
        i32.or
        i32.store offset=4
        local.get $0
        local.get $2
        i32.store offset=8
        local.get $2
        local.get $0
        local.get $2
        i32.load offset=4
        i32.const 3
        i32.and
        i32.or
        i32.store offset=4
        local.get $1
        local.get $0
        i32.store offset=8
       end
      end
      return
     end
     return
    end
    unreachable
   end
   local.get $0
   i32.load offset=4
   local.tee $0
   if
    global.get $~lib/rt/tcms/white
    local.get $0
    i32.const 20
    i32.sub
    local.tee $0
    i32.load offset=4
    local.tee $1
    i32.const 3
    i32.and
    i32.eq
    if
     block $__inlined_func$~lib/rt/tcms/Object#unlink$80
      local.get $1
      i32.const -4
      i32.and
      local.tee $1
      i32.eqz
      if
       local.get $0
       i32.load offset=8
       drop
       br $__inlined_func$~lib/rt/tcms/Object#unlink$80
      end
      local.get $1
      local.get $0
      i32.load offset=8
      local.tee $2
      i32.store offset=8
      local.get $2
      local.get $1
      local.get $2
      i32.load offset=4
      i32.const 3
      i32.and
      i32.or
      i32.store offset=4
     end
     global.get $~lib/rt/tcms/toSpace
     local.tee $1
     i32.load offset=8
     local.set $2
     local.get $0
     local.get $1
     global.get $~lib/rt/tcms/white
     i32.eqz
     i32.or
     i32.store offset=4
     local.get $0
     local.get $2
     i32.store offset=8
     local.get $2
     local.get $0
     local.get $2
     i32.load offset=4
     i32.const 3
     i32.and
     i32.or
     i32.store offset=4
     local.get $1
     local.get $0
     i32.store offset=8
    end
   end
   return
  end
  local.get $0
  i32.load
  local.tee $0
  if
   global.get $~lib/rt/tcms/white
   local.get $0
   i32.const 20
   i32.sub
   local.tee $0
   i32.load offset=4
   local.tee $1
   i32.const 3
   i32.and
   i32.eq
   if
    block $__inlined_func$~lib/rt/tcms/Object#unlink$81
     local.get $1
     i32.const -4
     i32.and
     local.tee $1
     i32.eqz
     if
      local.get $0
      i32.load offset=8
      drop
      br $__inlined_func$~lib/rt/tcms/Object#unlink$81
     end
     local.get $1
     local.get $0
     i32.load offset=8
     local.tee $2
     i32.store offset=8
     local.get $2
     local.get $1
     local.get $2
     i32.load offset=4
     i32.const 3
     i32.and
     i32.or
     i32.store offset=4
    end
    global.get $~lib/rt/tcms/toSpace
    local.tee $1
    i32.load offset=8
    local.set $2
    local.get $0
    local.get $1
    global.get $~lib/rt/tcms/white
    i32.eqz
    i32.or
    i32.store offset=4
    local.get $0
    local.get $2
    i32.store offset=8
    local.get $2
    local.get $0
    local.get $2
    i32.load offset=4
    i32.const 3
    i32.and
    i32.or
    i32.store offset=4
    local.get $1
    local.get $0
    i32.store offset=8
   end
  end
 )
 (func $~start
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 1268
  i32.const 1264
  i32.store
  i32.const 1272
  i32.const 1264
  i32.store
  i32.const 1264
  global.set $~lib/rt/tcms/fromSpace
  i32.const 36
  i32.const 7
  call $~lib/rt/tcms/__new
  local.tee $0
  i32.eqz
  if
   i32.const 0
   i32.const 0
   call $~lib/rt/tcms/__new
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store8
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  f32.const 0
  f32.store offset=8
  local.get $0
  f32.const 0
  f32.store offset=12
  local.get $0
  f32.const 0
  f32.store offset=16
  local.get $0
  f32.const 0
  f32.store offset=20
  local.get $0
  f32.const 0
  f32.store offset=24
  local.get $0
  f32.const 0
  f32.store offset=28
  local.get $0
  f32.const 0
  f32.store offset=32
  local.get $0
  global.set $assembly/hittables/index/Record
  i32.const 9
  i32.const 10
  call $~lib/rt/tcms/__new
  local.tee $0
  i32.eqz
  if
   i32.const 0
   i32.const 0
   call $~lib/rt/tcms/__new
   local.set $0
  end
  i32.const 10
  i32.const 11
  call $~lib/rt/tcms/__new
  local.set $1
  i32.const 6
  i32.const 12
  call $~lib/rt/tcms/__new
  local.tee $2
  i32.const 488
  i32.store16 offset=4
  local.get $2
  i32.const 0
  i32.store
  local.get $2
  call $assembly/hittables/Hittable/Hittable#constructor
  local.set $2
  i32.const 1952
  i32.const 14
  call $~lib/rt/tcms/__new
  local.tee $3
  i32.const 0
  i32.const 1952
  memory.fill
  local.get $2
  local.get $3
  i32.store
  local.get $1
  local.get $2
  i32.store
  i32.const 0
  global.set $~argumentsLength
  local.get $1
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store16 offset=8
  f32.const 0
  f32.const -1e3
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $2
  i32.const 1
  global.set $~argumentsLength
  local.get $1
  f32.const 1e3
  local.get $2
  f32.const 0.5
  call $assembly/utils/Vector3/Vector3#constructor@varargs
  call $assembly/materials/Lambertian/Lambertian#constructor
  call $assembly/hittables/World/World#addSphere
  local.get $1
  call $assembly/hittables/World/World#generateSmallSpheres
  f32.const 0
  f32.const 1
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor
  local.set $2
  i32.const 4
  i32.const 20
  call $~lib/rt/tcms/__new
  local.tee $3
  f32.const 1.5
  f32.store
  local.get $1
  f32.const 1
  local.get $2
  local.get $3
  call $assembly/materials/Material/Material#constructor
  call $assembly/hittables/World/World#addSphere
  local.get $1
  f32.const 1
  f32.const -4
  f32.const 1
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor
  f32.const 0.4000000059604645
  f32.const 0.20000000298023224
  f32.const 0.10000000149011612
  call $assembly/utils/Vector3/Vector3#constructor
  call $assembly/materials/Lambertian/Lambertian#constructor
  call $assembly/hittables/World/World#addSphere
  local.get $1
  f32.const 1
  f32.const 4
  f32.const 1
  f32.const 0
  call $assembly/utils/Vector3/Vector3#constructor
  f32.const 0.699999988079071
  f32.const 0.6000000238418579
  f32.const 0.5
  call $assembly/utils/Vector3/Vector3#constructor
  f32.const 0
  call $assembly/materials/Metal/Metal#constructor
  call $assembly/hittables/World/World#addSphere
  local.get $0
  local.get $1
  i32.store
  local.get $0
  call $assembly/Camera/Camera#constructor
  i32.store offset=4
  local.get $0
  i32.const 50
  i32.store8 offset=8
  local.get $0
  global.set $assembly/Tracer/tracer
  i32.const 2020
  i32.const 2016
  i32.store
  i32.const 2024
  i32.const 2016
  i32.store
  i32.const 2016
  global.set $~lib/rt/tcms/pinSpace
  i32.const 2116
  i32.const 2112
  i32.store
  i32.const 2120
  i32.const 2112
  i32.store
  i32.const 2112
  global.set $~lib/rt/tcms/toSpace
 )
)
